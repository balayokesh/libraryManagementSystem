import { Link } from 'react-router-dom';

export default function Books() {

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
                        bookData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.title}</td>
                                <td>{data.author}</td>
                                <td>{data.subject}</td>
                                <td>{data.publishedOn}</td>
                                <td>
                                    <Link to='/admin/editbook' state={{ title: data.title, author: data.author, subject: data.subject, publishedOn: data.publishedOn }}>
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
