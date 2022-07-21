import { Link, useLocation } from 'react-router-dom';

export default function EditBook() {

    const location = useLocation();
    const { title, author, subject, publishedOn } = location.state;

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
        alert('Changes are saved');
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
                <label htmlFor='publishedOn'>Published On:</label>
                <input type='number' required id='publishedOn' className='p-2 form-control' defaultValue={publishedOn} />
                <br />
                <input type='submit' value='Edit Book' className='btn btn-primary w-100' />
            </form>
        </div>
    );
}
