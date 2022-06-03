import { Link } from 'react-router-dom';

export default function AddBook () {

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
        alert('Member added');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Link to='/admin'>
                <i className='bi bi-arrow-left-circle-fill'></i>
            </Link>
            <h1>Add new member</h1>
            <label htmlFor='name'>Member name:</label>
            <input type='text' placeholder='name' required id='name' />
            <br />
            <label htmlFor='email'>Member email:</label>
            <input type='email' placeholder='email' required id='email' />
            <br />
            <label htmlFor='password'>Member password:</label>
            <input type='text' placeholder='password' required id='password' />
            <br />
            <label htmlFor='education'>Member education:</label>
            <input type='text' placeholder='education' required id='education' />
            <br />
            <input type='submit' value='Add Member' />
        </form>
    );
}
