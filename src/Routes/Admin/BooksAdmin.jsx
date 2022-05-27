import { useState } from 'react';

export default function BookAdmin() {

    const [resultData, setResultData] = useState([]);

    let bookData = [
        {
            id: 1,
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'The battles of good versus evil, with the evil continually trying to corrupt and exploit the good',
            publishedOn: 1837
        },
        {
            id: 2,
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'The battles of good versus evil, with the evil continually trying to corrupt and exploit the good',
            publishedOn: 1835
        },
        {
            id: 3,
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'The battles of good versus evil, with the evil continually trying to corrupt and exploit the good',
            publishedOn: 1827
        },
        {
            id: 4,
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'The battles of good versus evil, with the evil continually trying to corrupt and exploit the good',
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
        <div>
            <h2>Books Admin</h2>

            <div>
                <input type='text' placeholder='search' id='query' onKeyUp={handleSearch} />
                <select id='filter' onChange={handleSearch}>
                    <option value='title'>Title</option>
                    <option value='author'>Author</option>
                    <option value='publishedOn'>Published year</option>
                </select>
                <button onClick={handleSearch}>Search</button>
                <div>
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
                    </div>
                ))
            }
        </div>
    );
}
