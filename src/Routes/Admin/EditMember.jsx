import { Link, useLocation } from 'react-router-dom';

export default function EditBook () {

    const location = useLocation();
    const { email, name, password, education } = location.state;

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let name = document.getElementById('name').value;
        let password = document.getElementById('password').value;
        let education = document.getElementById('education').value;

        let data = {
            email: email,
            name: name,
            password: password,
            education: education
        }
        console.log(data);
        alert('Changes are saved');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Link to='/admin'>
                <i className='bi bi-arrow-left-circle-fill'></i>
            </Link>
            <h1>Edit Member</h1>
            <label htmlFor='title'>Member email:</label>
            <input type='text' placeholder='Email' required id='email' defaultValue={email} />
            <br />
            <label htmlFor='name'>Name:</label>
            <input type='text' placeholder='Name' required id='name' defaultValue={name} />
            <br />
            <label htmlFor='password'>Password:</label>
            <input type='text' placeholder='Password' required id='password' defaultValue={password} />
            <br />
            <label htmlFor='education'>Education:</label>
            <input type='text' required id='education' defaultValue={education} />
            <br />
            <input type='submit' value='Edit Book' />
        </form>
    );
}
