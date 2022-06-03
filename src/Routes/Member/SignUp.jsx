import { Link } from 'react-router-dom';

export default function SignUp () {

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let data = {
            email :email,
            password: password
        }
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Link to='/'>
                    <img src='https://ik.imagekit.io/balayokesh/LibraryManagerLogo_XkvQqnBkh.png' className='logo' alt='Logo' />
                </Link>
                <h1>Sign Up</h1>
                <input type='email' placeholder='Email' id='email' required autoFocus />
                <br />
                <input type='password' placeholder='Password' id='password' required/>
                <br />
                <input type='submit' value='Sign Up' />
                <br />
                Already have an account? <Link to='/login'>Login</Link>
            </form>
        </div>
    );
}
