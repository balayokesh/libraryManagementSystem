import { Link, useLocation } from 'react-router-dom';

export default function EditBook () {

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
        <form onSubmit={handleSubmit}>
            <Link to='/admin'>
                <i className='bi bi-arrow-left-circle-fill'></i>
            </Link>
            <h1>Edit book</h1>
            <label htmlFor='title'>Book Title:</label>
            <input type='text' placeholder='title' required id='title' defaultValue={title} />
            <br />
            <label htmlFor='author'>Author:</label>
            <input type='text' placeholder='Author' required id='author' defaultValue={author} />
            <br />
            <label htmlFor='subject'>Subject:</label>
            <input type='text' placeholder='Subject' required id='subject' defaultValue={subject} />
            <br />
            <label htmlFor='publishedOn'>Published On:</label>
            <input type='number' required id='publishedOn' defaultValue={publishedOn} />
            <br />
            <input type='submit' value='Edit Book' />
        </form>
    );
}
