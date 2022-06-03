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
        <form onSubmit={handleSubmit}>
            <h1>Edit Account Details</h1>
            <label htmlFor='title'>Member email:</label>
            <input type='text' placeholder='Email' required id='email' defaultValue={memberData.email} />
            <br />
            <label htmlFor='name'>Name:</label>
            <input type='text' placeholder='Name' required id='name' defaultValue={memberData.name} />
            <br />
            <label htmlFor='password'>Password:</label>
            <input type='text' placeholder='Password' required id='password' defaultValue={memberData.password} />
            <br />
            <label htmlFor='education'>Education:</label>
            <input type='text' required id='education' defaultValue={memberData.education} />
            <br />
            <input type='submit' value='save changes' />
        </form>
    );
}
