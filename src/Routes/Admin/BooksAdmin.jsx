import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function BookAdmin() {

    const [resultData, setResultData] = useState([]);
    const [bookData, setBookData] = useState([]);

    axios.get('http://localhost:8080/api/v1/books')
        .then(res => {
            setBookData(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    const handleSearch = () => {
        let filter = document.getElementById('filter').value;
        let search = document.getElementById('query').value;
        let array = [];
        if (filter === 'title') {
            for (let i = 0; i < bookData.length; i++) {
                if (bookData[i].title === search) {
                    array.push(bookData[i]);
                }
            }
        }
        else if (filter === 'author') {
            for (let i = 0; i < bookData.length; i++) {
                if (bookData[i].author === search) {
                    array.push(bookData[i]);
                }
            }
        }
        else if (filter === 'publishedon') {
            for (let i = 0; i < bookData.length; i++) {
                if (bookData[i].publishedon == search) {
                    array.push(bookData[i]);
                }
            }
        }
        setResultData(array);
    }

    const handleDelete = (id) => {
        document.getElementById('loader').style.display = 'inline';
        axios.delete(`http://localhost:8080/api/v1/books/${id}`)
            .then(res => {
                document.getElementById('loader').style.display = 'none';
                alert('Book deleted successfully');
                console.log(res.data);
            })
            .catch(err => {
                document.getElementById('loader').style.display = 'none';
                alert('Deletion failed');
                console.log(err);
            })
    }

    return (
        <div className='bg-light p-3'>
            <h2 className='text-center m-3'>Books Admin</h2>
            <button onClick={() => window.location.href = '/admin/addbook'} className='btn btn-success m-3'>
                <i className='bi bi-plus-circle-fill' title='Edit'></i>
                &nbsp;
                New Book
            </button>

            {/* Start of search bar */}
            <details>
                <summary className='btn btn-success mx-3'>
                    <i className='bi bi-search' title='Edit'></i>
                    &nbsp;
                    Search
                </summary>
                <div className='border rounded p-3 text-center search-gradient'>
                    <input type='text' placeholder='search' id='query' onKeyUp={handleSearch} className='form-control w-50 d-inline' />
                    <select id='filter' onChange={handleSearch} className='form-control form-select w-25 d-inline'>
                        <option value='title'>Title</option>
                        <option value='author'>Author</option>
                        <option value='publishedon'>Published year</option>
                    </select>
                    <button onClick={handleSearch} className='btn btn-success d-inline'>Search</button>
                    <div className='p-3 text-left'>
                        {
                            (resultData.length === 0)
                                ?
                                <p className='text-center'>Search results appear here</p>
                                :
                                resultData.map((data) => (
                                    <div key={data.id} className='card m-1'>
                                        <div className='card-body'>
                                            <big>{data.title}</big> - <small>{data.author}</small>
                                            <br />
                                            <span className='bg-primary text-white border rounded px-1'>{data.subject}</span>
                                            &nbsp;
                                            Published on:<small>{data.publishedon}</small>

                                            <Link to='/admin/editbook' className='mx-1' state={{ id: data.id, title: data.title, author: data.author, subject: data.subject, publishedon: data.publishedon }}>
                                                <button className='btn btn-outline-primary'>
                                                    <i className="bi bi-pencil-fill" title='Edit'>Edit</i>
                                                </button>
                                            </Link>

                                            <button className='btn btn-outline-danger mx-1'>
                                                <i className="bi bi-trash-fill" title='Delete' onClick={() => handleDelete(data.id)}>Delete</i>
                                            </button>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </details>
            {/* End of search bar */}
            <table className='table table-striped table-bordered m-3'>
                <thead>
                    <tr>
                        <th>Book title:</th>
                        <th>Author</th>
                        <th>Subject</th>
                        <th>Published year</th>
                        <th>
                            Actions
                            <span id='loader' style={{ display: 'none' }}>
                                &nbsp;
                                <span className='spinner-border spinner-border-sm'></span>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.title}</td>
                                <td>{data.author}</td>
                                <td>{data.subject}</td>
                                <td>{data.publishedon}</td>
                                <td>
                                    <Link to='/admin/editbook' state={{ id: data.id, title: data.title, author: data.author, subject: data.subject, publishedon: data.publishedon }}>
                                        <button className='btn btn-outline-primary mx-1'>
                                            <i className="bi bi-pencil-fill" title='Edit'>Edit</i>
                                        </button>
                                    </Link>

                                    <button className='btn btn-outline-danger mx-1'>
                                        <i className="bi bi-trash-fill" title='Delete' onClick={() => handleDelete(data.id)}>
                                            Delete
                                        </i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
