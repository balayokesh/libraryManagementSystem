import { useState } from 'react';
import { Link } from 'react-router-dom';

import BooksAdmin from './BooksAdmin';
import MembersAdmin from './MembersAdmin';

export default function Admin() {

    const [currentTab, setCurrentTab] = useState('books');

    return (
        <div>
            <Link to='/'>
                <img src='https://ik.imagekit.io/balayokesh/LibraryManagerLogo_XkvQqnBkh.png' alt='Logo' className='logo' />
            </Link>
            <h1>Hello, Admin!</h1>
            <Link to='/admin/login'>Login</Link>
            <br />

            <button onClick={() => setCurrentTab('books')}>Books</button>
            <button onClick={() => setCurrentTab('people')}>Members</button>

            <div>
                {
                    currentTab === 'books' ? <BooksAdmin /> : <MembersAdmin />
                }
            </div>
        </div>
    )
}
