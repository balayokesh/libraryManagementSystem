import { Link } from 'react-router-dom';

export default function App() {
	return (
		<div className='root'>
			<div className='d-flex justify-content-between p-3 bg-dark text-white'>
				<div className='d-flex'>
					<img src='https://ik.imagekit.io/balayokesh/LibraryManagerLogo_XkvQqnBkh.png' alt='Logo' className='logo mx-1' />
					<h2 className='align-self-center mx-2'>Library Manager</h2>	
				</div>
				<div className='align-self-center'>
					<Link to='/member' className='btn mx-2 p-3 border text-white'>Member login</Link>
					<Link to='/admin' className='btn mx-2 p-3 text-white'>Admin login</Link>
				</div>
			</div> 

			<div className='border rounded container my-3 p-3 bg-light'>
				<h3 className='my-3 text-center'>Features ✔</h3>
				<div className='flex-column d-flex justify-content-center align-items-center'>
					<div className='border rounded center m-3 p-3 w-75 text-white bg-secondary cardhover'>
						Login to claim your membership
					</div>
					<div className='border rounded center m-3 p-3 w-75 text-white bg-secondary cardhover'>
						Option to reserve a book when it goes out of stock
					</div>	
					<div className='border rounded center m-3 p-3 w-75 text-white bg-secondary cardhover'>
						Book due email reminders to remind you with deadlines for returning the book
					</div>	
					<div className='border rounded center m-3 p-3 w-75 text-white bg-secondary cardhover'>
						Easy to use User interface, book management page available on web
					</div>	
				</div>
			</div>

			<div className='fixed-bottom bg-dark text-white text-center'>
				&copy; Library manager 2022
			</div>
		</div>
	);
}
