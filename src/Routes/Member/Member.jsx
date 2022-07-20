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
                <Link to='/'>
                    <img src='https://ik.imagekit.io/balayokesh/LibraryManagerLogo_XkvQqnBkh.png' alt='Logo' className='logo' />
                </Link>
                <h1>Hello, Member!</h1>
                <button onClick={() => setIsLoggedIn(0)}>Logout</button>
                <br />

                <nav>
                    <ul>
                        <li><button onClick={() => setCurrentTab('home')}>Home</button></li>
                        <li><button onClick={() => setCurrentTab('books')}>Books</button></li>
                        <li><button onClick={() => setCurrentTab('myaccount')}>My account</button></li>
                    </ul>
                </nav>

                <div>
                    {
                        currentTab === 'home'
                            ?
                            <Home />
                            :
                            currentTab === 'books'
                                ?
                                <Books />
                                :
                                <MyAccount />
                    }
                </div>

            </div>
        )
    }
}
