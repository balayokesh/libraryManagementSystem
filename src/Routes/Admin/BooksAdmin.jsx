import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookAdmin() {

    const [resultData, setResultData] = useState([]);

    let bookData = [
        {
            id: 1,
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'English Literature',
            publishedOn: 1837
        },
        {
            id: 2,
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'Computer programming',
            publishedOn: 1835
        },
        {
            id: 3,
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'History',
            publishedOn: 1827
        },
        {
            id: 4,
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'Economics',
            publishedOn: 1857
        }
    ];

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
        else if (filter === 'publishedOn') {
            for (let i = 0; i < bookData.length; i++) {
                if (bookData[i].publishedOn === search) {
                    array.push(bookData[i]);
                }
            }
        }
        setResultData(array);
    }

    return (
        <div className='bg-light p-3'>
            <h2 className='text-center m-3'>Books Admin</h2>
            <button onClick={() => window.location.href = '/admin/addbook'} className='btn btn-success m-3'>
                <i className='bi bi-plus-circle-fill' title='Edit'></i>
                &nbsp;
                New Book
            </button>
            <div className='border rounded p-3'>
                <input type='text' placeholder='search' id='query' onKeyUp={handleSearch} className='form-control w-50 d-inline' />
                <select id='filter' onChange={handleSearch} className='form-control form-select w-25 d-inline'>
                    <option value='title'>Title</option>
                    <option value='author'>Author</option>
                    <option value='publishedOn'>Published year</option>
                </select>
                <button onClick={handleSearch} className='btn btn-success d-inline'>Search</button>
                <div className='p-3'>
                    {
                        resultData.map((data) => (
                            <div key={data.id}>
                                <big>{data.title}</big> - <small>{data.author}</small>
                                <p>{data.subject}</p>
                                Published on: <small>{data.publishedOn}</small>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                bookData.map((data) => (
                    <div className='border' key={data.id}>
                        <big>{data.title}</big> - <small>{data.author}</small>
                        <p>{data.subject}</p>
                        Published on: <small>{data.publishedOn}</small>
                        <details>
                            <summary title='menu'>...</summary>
                            <div className='border'>
                                    <Link to='/admin/editbook' state={{ title: data.title, author: data.author, subject: data.subject, publishedOn: data.publishedOn }}>
                                        <i className="bi bi-pencil-fill border" title='Edit'></i>
                                    </Link>
                                    <i className="bi bi-trash-fill border" title='Delete'></i>
                            </div>
                        </details>
                    </div>
                ))
            }
        </div>
    );
}
