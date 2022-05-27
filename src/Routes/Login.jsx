export default function Login () {

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let data = {
            email :email,
            password: password
        }
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type='email' placeholder='Email' id='email' required autoFocus />
                <br />
                <input type='password' placeholder='Password' id='password' required/>
                <br />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
}
