import { Link, useLocation } from 'react-router-dom';

import axios from 'axios';

export default function EditBook() {

    const location = useLocation();
    const { id, title, author, subject, publishedon } = location.state;

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('loader').style.display = 'inline';
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let subject = document.getElementById('subject').value;
        let publishedon = document.getElementById('publishedon').value;

        let data = {
            title: title,
            author: author,
            subject: subject,
            publishedon: publishedon
        }
        axios.put(`http://localhost:8080/api/v1/books/${id}`, data)
            .then(res => {
                console.log(data);
                console.log(res);
                alert('Updation completed');
                window.location = '/admin';
            })
            .catch(err => {
                document.getElementById('loader').style.display = 'none';
                alert('Error occured');
                console.log(err);
            })
    }

    return (
        <div className='d-flex justify-content-center p-3 m-3 root'>
            <Link to='/admin'>
                <i className='bi bi-x-circle-fill close' title='close'></i>
            </Link>
            <form onSubmit={handleSubmit} className='border p-3 m-3 w-50'>
                <h3 className='mx-3 p-3 text-center'>Edit book</h3>
                <label htmlFor='title'>Book Title:</label>
                <input type='text' placeholder='title' className='p-2 form-control' required id='title' defaultValue={title} />
                <br />
                <label htmlFor='author'>Author:</label>
                <input type='text' placeholder='Author' className='p-2 form-control' required id='author' defaultValue={author} />
                <br />
                <label htmlFor='subject'>Subject:</label>
                <input type='text' placeholder='Subject' className='p-2 form-control' required id='subject' defaultValue={subject} />
                <br />
                <label htmlFor='publishedon'>Published On:</label>
                <input type='number' required id='publishedon' className='p-2 form-control' defaultValue={publishedon} />
                <br />
                <button className='btn btn-primary w-100'>
                    Edit Book
                    <span id='loader' style={{ display: 'none' }}>
                        &nbsp;
                        <span className='spinner-border spinner-border-sm'></span>
                    </span>
                </button>
            </form>
        </div>
    );
}
