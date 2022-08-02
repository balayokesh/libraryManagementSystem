import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Books() {

    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);
    
    let booksdata = [];

    const loadBooks = () => {
        let id = Cookies.get('uid');
        axios.get(`http://localhost:8080/api/v1/members/${id}`)
            .then(res => {
                let books = res.data.books.split(',');
                // console.log(books);
                for (let i = 0; i < books.length; i++) {
                    let bookId = books[i];
                    axios.get(`http://localhost:8080/api/v1/books/${bookId}`)
                        .then(res => {
                            booksdata.push(res.data);
                            setBookData(booksdata);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }                
                console.log("Book Data state: " + bookData);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='p-3'>
            <h2 className='text-center m-3'>Your Books</h2>
            <span className='badge bg-secondary'>{bookData.length} / 5 available</span>
            <button onClick={() => window.location.href = '/member/checkout'} className='btn btn-success m-3'>
                <i className='bi bi-plus-circle-fill' title='Checkout new book'></i>
                &nbsp;
                Checkout New Book
            </button>

            <table className='table table-striped table-bordered my-1'>
                <thead>
                    <tr>
                        <th>Book title:</th>
                        <th>Author</th>
                        <th>Subject</th>
                        <th>Published year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (bookData.length === 0)
                            ?
                            <tr>
                                <td colSpan={5} className='text-center'>No data found</td>
                            </tr>
                            :
                            bookData.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.title}</td>
                                    <td>{data.author}</td>
                                    <td>{data.subject}</td>
                                    <td>{data.publishedon}</td>
                                    <td>
                                        <Link to='/member/checkout' state={{ title: data.title, author: data.author, subject: data.subject, publishedOn: data.publishedOn }}>
                                            <button className='btn btn-outline-primary mx-1'>
                                                <i className='bi bi-arrow-clockwise' title='Renew'></i>
                                            </button>
                                        </Link>
                                        <button className='btn btn-outline-danger mx-1'>
                                            <i className='bi bi-dash' title='Remove/Return the book'></i>
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
