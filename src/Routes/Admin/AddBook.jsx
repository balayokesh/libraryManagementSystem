import { Link } from 'react-router-dom';

export default function AddBook () {

    const handleSubmit = (e) => {
        e.preventDefault();
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let subject = document.getElementById('subject').value;
        let publishedOn = document.getElementById('publishedOn').value;

        let data = {
            title: title,
            author: author,
            subject: subject,
            publishedOn: publishedOn
        }
        console.log(data);
        alert('Book added');
    }

    return (
        <div className='d-flex justify-content-center p-3 m-3'>
            <Link to='/admin/'>
            <i class="bi bi-x-circle-fill"></i>
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
                <input type='submit' className='btn btn-primary w-100' value='Add Book' />
            </form>
        </div>
    );
}
