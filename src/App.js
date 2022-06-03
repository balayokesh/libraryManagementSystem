import { Link } from 'react-router-dom';

export default function App() {
	return (
		<div>
			<h1>Library Manager</h1>
			<Link to='/login'>Member login</Link>
			<br />
			<Link to='/admin'>Admin login</Link>
		</div>
	);
}
