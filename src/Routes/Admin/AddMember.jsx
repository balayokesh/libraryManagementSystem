import { Link } from 'react-router-dom';

export default function AddBook() {

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
        <div className='d-flex justify-content-center p-3 m-3'>
            <Link to='/admin/'>
                <i class="bi bi-x-circle-fill"></i>
            </Link>
            <form onSubmit={handleSubmit}>
                <h3 className='m-3 p-3 text-center'>Add new member</h3>
                <label htmlFor='name'>Member name:</label>
                <input type='text' placeholder='name' className='p-2 form-control' required id='name' />
                <br />
                <label htmlFor='email'>Member email:</label>
                <input type='email' placeholder='email' className='p-2 form-control' required id='email' />
                <br />
                <label htmlFor='password'>Member password:</label>
                <input type='text' placeholder='password' className='p-2 form-control' required id='password' />
                <br />
                <label htmlFor='education'>Member education:</label>
                <input type='text' placeholder='education' className='p-2 form-control' required id='education' />
                <br />
                <input type='submit' className='btn btn-primary w-100' value='Add Member' />
            </form>
        </div>
    );
}
