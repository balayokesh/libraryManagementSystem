import { Link } from 'react-router-dom';

export default function App() {
	return (
		<div className='root'>
			<div className='d-flex justify-content-between p-3 bg-dark text-white fixed-top'>
				<div className='d-flex'>
					<img src='https://ik.imagekit.io/balayokesh/LibraryManagerLogo_XkvQqnBkh.png' alt='Logo' className='logo mx-1' />
					<h2 className='align-self-center mx-2'>Library Manager</h2>
				</div>
				<div className='align-self-center'>
					<Link to='/member' className='btn mx-2 p-3 border text-white'>Member login</Link>
					<Link to='/admin' className='btn mx-2 p-3 text-white'>Admin login</Link>
				</div>
			</div>

			<br />
			<br />
			<br />
			<br />

			<div className='jumbotron jumbotron-fluid p-3 bg-grey text-center'>
				<div class='jumbotron p-3 m-3'>
					<h1 class='display-4 m-3'>Library Manager</h1>
					<p class='lead m-3'>Easy library management software accessible in web.  Below are the features that we offer.</p>
				</div>
			</div>

			<div className='border rounded container my-3 p-3 bg-light'>
				<h3 className='my-3 text-center'>Features ✔</h3>
				<div className='flex-column d-flex justify-content-center align-items-center text-center'>
					<div className='border rounded center m-3 p-3 w-75 bg-grey cardhover display-7'>
						Login to claim your membership
					</div>
					<div className='border rounded center m-3 p-3 w-75 bg-grey cardhover display-7'>
						Option to reserve a book when it goes out of stock
					</div>
					<div className='border rounded center m-3 p-3 w-75 bg-grey cardhover display-7'>
						Book due email reminders to remind you with deadlines for returning the book
					</div>
					<div className='border rounded center m-3 p-3 w-75 bg-grey cardhover display-7'>
						Easy to use User interface, book management page available on web
					</div>
				</div>
			</div>

			<div className='jumbotron jumbotron-fluid p-3 text-center bg-grey'>
				<div className='jumbotron m-3 p-3'>
				<p  className='display-7 p-3 m-3'>Login or SignUp as a member to continue using this site.</p>
				<Link to='/signup'>
				<button className='btn btn-outline-dark btn-lg w-25'>Sign Up</button>
				</Link>
				</div>
			</div>

			<br />

			<div className='fixed-bottom bg-dark text-white text-center'>
				&copy; Library manager 2022
			</div>
		</div>
	);
}
