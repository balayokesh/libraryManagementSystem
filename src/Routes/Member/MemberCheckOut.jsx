import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MemberCheckOut() {

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
        <div className='d-flex justify-content-center'>
            <div className='w-50'>
                <Link to='/member'>
                    <i className='bi bi-arrow-left-circle-fill logo'></i>
                </Link>
                <h3 className='text-center m-3'>Checkout new Books</h3>
                <div className='border rounded p-3 text-center search-gradient'>
                    <input type='text' placeholder='search' id='query' onKeyUp={handleSearch} className='form-control w-50 d-inline' />
                    <select id='filter' onChange={handleSearch} className='form-control form-select w-25 d-inline'>
                        <option value='title'>Title</option>
                        <option value='author'>Author</option>
                        <option value='publishedOn'>Published year</option>
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
                                            Published on:<small>{data.publishedOn}</small>

                                            <button className='btn btn-outline-success mx-1'>
                                                <i className='bi bi-bag-check' title='checkout'></i>
                                                &nbsp;
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
