import { useState } from 'react';
import { Link } from 'react-router-dom';

import Home from './Home';
import Login from './MemberLogin';
import MyAccount from './MyAccount';
import Books from './Books';

export default function Member() {

    const [isLoggedIn, setIsLoggedIn] = useState(1);
    const [currentTab, setCurrentTab] = useState('home');

    if (isLoggedIn === 0) {
        return (
            <Login setIsLoggedIn={setIsLoggedIn} />
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
                            isLoggedIn === 0 ? <Link to='/member' className='border btn mx-2 p-3 text-white'>Login</Link> : <button className='border btn mx-2 p-3 text-white' onClick={() => setIsLoggedIn(0)}>Logout</button>
                        }
                    </div>
                </div>

                <div className='d-flex justify-content-center align-content-center border bg-light'>
                    <div className='w-25 p-3 sidebar text-center'>
                        <img src='https://source.unsplash.com/random' className='logo' alt='profile picture' />
                        <h3 className='text-center p-3'>Hello, Member</h3>

                        <nav className='border'>
                            <ul className='list-unstyled'>
                                <li onClick={() => setCurrentTab('books')} className='btn w-100 border p-3 m-0'>Books</li>
                                <li onClick={() => setCurrentTab('myaccount')} className='btn w-100 m-0 p-3'>My account</li>
                            </ul>
                        </nav>
                    </div>

                    <div className='w-75'>
                        {
                            currentTab === 'myaccount'
                                ?
                                <MyAccount />
                                :
                                <Books />
                        }
                    </div>
                </div>
            </div>
        )
    }
}
