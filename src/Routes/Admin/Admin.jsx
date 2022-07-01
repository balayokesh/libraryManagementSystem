import { useState } from 'react';
import { Link } from 'react-router-dom';

import AdminLogin from './AdminLogin';
import BooksAdmin from './BooksAdmin';
import MembersAdmin from './MembersAdmin';

export default function Admin() {

    const [isLoggedIn, setIsLoggedIn] = useState(0);
    const [currentTab, setCurrentTab] = useState('books');

    if (isLoggedIn === 0) {
        return (
            <AdminLogin setIsLoggedIn={setIsLoggedIn}/>
        )
    }
    else {
        return (
            <div>
                <div className='d-flex justify-content-between p-3 bg-dark text-white'>
                    <div className='d-flex'>
                        <Link to='/'>
                            <img src='https://ik.imagekit.io/balayokesh/LibraryManagerLogo_XkvQqnBkh.png' alt='Logo' className='logo mx-1' />
                        </Link>
                        <h2 className='align-self-center mx-2'>Library Manager</h2>	
                    </div>
                    <div className='align-self-center'>
                        {
                        isLoggedIn === 0 ? <Link to='/admin/login' className='border btn mx-2 p-3 text-white'>Login</Link> : <button className='border btn mx-2 p-3 text-white' onClick={() => setIsLoggedIn(0)}>Logout</button>
                        }
                    </div>
                </div> 

                <br />
    
                <div>
                    <button onClick={() => setCurrentTab('books')}>Books</button>
                    <button onClick={() => setCurrentTab('people')}>Members</button>

                    <div>
                        {currentTab === 'books' ? <BooksAdmin /> : <MembersAdmin />}
                    </div>
                </div>
                
            </div>
        )
    }
}
