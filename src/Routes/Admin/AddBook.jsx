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
        <form onSubmit={handleSubmit}>
            <Link to='/admin'>
                <i className='bi bi-arrow-left-circle-fill'></i>
            </Link>
            <h1>Add new book</h1>
            <label htmlFor='title'>Book Title:</label>
            <input type='text' placeholder='title' required id='title' />
            <br />
            <label htmlFor='author'>Author:</label>
            <input type='text' placeholder='Author' required id='author' />
            <br />
            <label htmlFor='subject'>Subject:</label>
            <input type='text' placeholder='Subject' required id='subject' />
            <br />
            <label htmlFor='publishedOn'>Published On:</label>
            <input type='number' required id='publishedOn' />
            <br />
            <input type='submit' value='Add Book' />
        </form>
    );
}