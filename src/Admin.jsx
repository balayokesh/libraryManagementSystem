import { Link } from 'react-router-dom';

export default function Admin () {
    return (
        <div>
            <h1>Hello, Admin!</h1>
            <Link to='/admin/login'>Login</Link>
        </div>
    )
}
