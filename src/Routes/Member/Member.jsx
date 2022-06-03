import { useState } from 'react';
import { Link } from 'react-router-dom';

import Home from './Home';
import MyAccount from './MyAccount';
import Books from './Books';

export default function Member () {

    const [currentTab, setCurrentTab] = useState('home');

    return (
        <div>
            <Link to='/'>
                <img src='https://ik.imagekit.io/balayokesh/LibraryManagerLogo_XkvQqnBkh.png' alt='Logo' className='logo' />
            </Link>
            <h1>Hello, Member!</h1>
            <Link to='/member/login'>Login</Link>
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
