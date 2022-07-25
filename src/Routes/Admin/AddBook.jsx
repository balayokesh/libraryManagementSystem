import { Link } from 'react-router-dom';

import axios from 'axios';

export default function AddBook() {

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('loader').style.display = 'inline';
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let subject = document.getElementById('subject').value;
        let publishedOn = document.getElementById('publishedOn').value;

        let data = {
            title: title,
            author: author,
            subject: subject,
            publishedon: publishedOn
        }
        console.log(data);
        axios.post('http://localhost:8080/api/v1/books', data)
            .then(res => {
                document.getElementById('loader').style.display = 'none';
                console.log(res.data);
                alert(`${res.data.title} added successfully`);
            })
            .catch(err => {
                document.getElementById('loader').style.display = 'none';
                alert('Some error has been occured');
                console.log(err);
            })
    }

    return (
        <div className='d-flex justify-content-center p-3 m-3'>
            <Link to='/admin/'>
                <i className='bi bi-x-circle-fill'></i>
            </Link>
            <form onSubmit={handleSubmit}>
                <h3 className='m-3 p-3 text-center'>Add new book</h3>
                <label htmlFor='title'>Book Title:</label>
                <input type='text' placeholder='title' className='p-2 form-control' required id='title' />
                <br />
                <label htmlFor='author'>Author:</label>
                <input type='text' placeholder='Author' className='p-2 form-control' required id='author' />
                <br />
                <label htmlFor='subject'>Subject:</label>
                <input type='text' placeholder='Subject' className='p-2 form-control' required id='subject' />
                <br />
                <label htmlFor='publishedOn'>Published On:</label>
                <input type='number' className='p-2 form-control' required id='publishedOn' />
                <br />
                <button className='btn btn-primary w-100'>
                    Add Book
                    <span id='loader' style={{ display: 'none' }}>
                        &nbsp;
                        <span className='spinner-border spinner-border-sm'></span>
                    </span>
                </button>
            </form>
        </div>
    );
}
