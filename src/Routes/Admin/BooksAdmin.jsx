export default function BookAdmin() {

    let bookData = [
        {
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'The battles of good versus evil, with the evil continually trying to corrupt and exploit the good',
            publishedOn: 1837
        },
        {
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'The battles of good versus evil, with the evil continually trying to corrupt and exploit the good',
            publishedOn: 1837
        },
        {
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'The battles of good versus evil, with the evil continually trying to corrupt and exploit the good',
            publishedOn: 1837
        },
        {
            title: 'Oliver Twist',
            author: 'Charles Dickens',
            subject: 'The battles of good versus evil, with the evil continually trying to corrupt and exploit the good',
            publishedOn: 1837
        }
    ];

    const handleSearch = () => {
        let elem = document.getElementById('searchResult').innerHTML;
        let result = '';
        elem = result;
    }

    return (
        <div>
            <h2>Books Admin</h2>
            <input type='text' placeholder='search' />
            <select>
                <option>Title</option>
                <option>Author</option>
                <option>Published year</option>
            </select>
            <button onClick={handleSearch}>Search</button>
            <div id='searchResult'></div>
            {
                bookData.map((data) => (
                    <div className='border'>
                        <big>{data.title}</big> - <small>{data.author}</small>

                        <p>{data.subject}</p>
                        Published on: <small>{data.publishedOn}</small>
                    </div>
                ))
            }
        </div>
    );
}
