import { Link } from 'react-router-dom';

import axios from 'axios';

export default function SignUp() {

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('loader').style.display = 'inline';
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let data = {
            name: email,
            password: password
        }
        axios.post('http://localhost:8080/api/v1/members', data)
            .then(res => {
                document.getElementById('loader').style.display = 'none';
                alert('User created');
                console.log(data);
                console.log(res.data);
            })
            .catch(err => {
                document.getElementById('loader').style.display = 'none';
                alert('Some error occured');
                console.log(err);
            })
    }

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
                    <Link to='/member' className='btn mx-2 p-3 text-white border'>Member login</Link>
                    <Link to='/admin' className='btn mx-2 p-3 text-white'>Admin login</Link>
                </div>
            </div>

            <div className='d-flex justify-content-center p-3 m-3'>
                <form onSubmit={handleSubmit} className='border rounded p-3' >
                    <h3 className='m-3 p-3 text-center'>Sign Up</h3>
                    <input type='text' placeholder='Email' id='email' className='p-2 form-control' required autoFocus />
                    <br />
                    <input type='password' placeholder='Password' id='password' className='p-2 form-control' required />
                    <br />
                    <button className='btn btn-primary w-100'>
                        Signup
                        <span id='loader' style={{ display: 'none' }}>
                            &nbsp;
                            <span className='spinner-border spinner-border-sm'></span>
                        </span>
                    </button>
                    <br />
                    Already have an account?
                    <Link to='/member'>
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
}
