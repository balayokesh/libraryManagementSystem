import { Link } from 'react-router-dom';

export default function AdminLogin (props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let data = {
            email :email,
            password: password
        }
        console.log(data);
        props.setIsLoggedIn(1);
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
					<Link to='/member' className='btn mx-2 p-3 text-white'>Member login</Link>
					<Link to='/admin' className='btn mx-2 p-3 border text-white'>Admin login</Link>
				</div>
			</div> 

            <div className='d-flex justify-content-center p-3 m-3'>
                <form onSubmit={handleSubmit} className='border rounded p-3'>
                    <h3 className='m-3 p-3 text-center'>Admin Login</h3>
                    <input type='email' placeholder='Email' id='email' className='p-2 form-control' required autoFocus />
                    <br />
                    <input type='password' placeholder='Password' id='password' className='p-2 form-control' required/>
                    <br />
                    <input type='submit' value='Login' className='btn btn-primary w-100' />
                </form>
            </div>
        </div>
    );
}
