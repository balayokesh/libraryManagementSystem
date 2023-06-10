import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function MyAccount() {

    const [memberData, setMemberData] = useState([]);

    useEffect (() => {
        refreshMemberData();
    }, []);

    const refreshMemberData = () => {
        let id = Cookies.get('uid');
        console.log(id);
        axios.get(`http://localhost:8080/api/v1/members/${id}`)
            .then(res => {
                setMemberData(res.data);
            })
            .catch(err => {
                alert('Error fetching details');
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('loader').style.display = 'inline';
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
        axios.put(`http://localhost:8080/api/v1/members/${Cookies.get('uid')}`, data)
            .then(res => {
                console.log(res);
                document.getElementById('loader').style.display = 'none';
            })
            .catch(err => {
                console.log(err);
                document.getElementById('loader').style.display = 'none';
            })
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
                <button className='btn btn-primary w-100'>
                    Save changes
                    <span id='loader' style={{ display: 'none' }}>
                        &nbsp;
                        <span className='spinner-border spinner-border-sm'></span>
                    </span>
                </button>
            </form>
        </div>
    );
}
