import { Link } from 'react-router-dom';

export default function Books () {

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

    return (
        <div>
            <h2>Your Books:</h2>
            <p>{bookData.length} / 5 available</p>
            <button onClick={() => window.location.href = '/member/checkout'}>
                <i className='bi bi-plus-circle-fill' title='Checkout new book'></i>
                Checkout New Book
            </button>
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
                                    <i className='bi bi-arrow-clockwise border' title='Renew'></i>
                                    </Link>
                                    <i className='bi bi-file-minus border' title='Remove/Return the book'></i>
                            </div>
                        </details>
                    </div>
                ))
            }
        </div>
    );
}
