export default function MyAccount() {

    let memberData = {
        id: 1,
        email: 'ajay@example.com',
        name: 'Ajay',
        password: '123',
        education: 'SSLC'
    };

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
        <div className='d-flex justify-content-center p-3'>
            <form onSubmit={handleSubmit} className='border rounded p-3'>
                <h3 className='mx-3 p-3 text-center'>Edit Account Details</h3>
                <label htmlFor='email'>Member email:</label>
                <input type='text' placeholder='Email' required id='email' defaultValue={memberData.email} className='p-2 form-control' />
                <br />
                <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='Name' required id='name' defaultValue={memberData.name} className='p-2 form-control' />
                <br />
                <label htmlFor='password'>Password:</label>
                <input type='text' placeholder='Password' required id='password' defaultValue={memberData.password} className='p-2 form-control' />
                <br />
                <label htmlFor='education'>Education:</label>
                <input type='text' required id='education' defaultValue={memberData.education} className='p-2 form-control' />
                <br />
                <input type='submit' value='save changes' className='btn btn-primary w-100' />
            </form>
        </div>
    );
}
