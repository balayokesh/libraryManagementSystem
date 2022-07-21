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
        <div className='d-flex justify-content-center p-3 m-3'>
        <form onSubmit={handleSubmit} className='border p-3 m-3 w-50' >
            <Link to='/admin'>
                <i class="bi bi-x-circle-fill"></i>
            </Link>
            <h3 className='mx-3 p-3 text-center'>Edit Member</h3>
            <label htmlFor='title'>Member email:</label>
            <input type='text' placeholder='Email' className='p-2 form-control' required id='email' defaultValue={email} />
            <br />
            <label htmlFor='name'>Name:</label>
            <input type='text' placeholder='Name' className='p-2 form-control' required id='name' defaultValue={name} />
            <br />
            <label htmlFor='password'>Password:</label>
            <input type='text' placeholder='Password' className='p-2 form-control' required id='password' defaultValue={password} />
            <br />
            <label htmlFor='education'>Education:</label>
            <input type='text' className='p-2 form-control' required id='education' defaultValue={education} />
            <br />
            <input type='submit' value='Edit Book' className='btn btn-primary w-100' />
        </form>
        </div>
    );
}
