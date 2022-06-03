import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MembersAdmin () {

    const [resultData, setResultData] = useState([]);

    let memberData = [
        {
            id: 1,
            email: 'ajay@example.com',
            name: 'Ajay',
            password: '123',
            education: 'SSLC'
        },
        {
            id: 2,
            email: 'arun@example.com',
            name: 'Arun',
            password: '123',
            education: 'HSC'
        },
        {
            id: 3,
            email: 'anitha@example.com',
            name: 'Anitha',
            password: '123',
            education: 'B.E'
        },
        {
            id: 4,
            email: 'priya@example.com',
            name: 'Priya',
            password: '123',
            education: 'B.tech'
        }
    ];

    const handleSearch = () => {
        let filter = document.getElementById('filter').value;
        let search = document.getElementById('query').value;
        let array = [];
        if (filter === 'email') {
            for (let i = 0; i < memberData.length; i++) {
                if (memberData[i].email === search) {
                    array.push(memberData[i]);
                }
            }
        }
        else if (filter === 'name') {
            for (let i = 0; i < memberData.length; i++) {
                if (memberData[i].name === search) {
                    array.push(memberData[i]);
                }
            }
        }
        else if (filter === 'education') {
            for (let i = 0; i < memberData.length; i++) {
                if (memberData[i].education === search) {
                    array.push(memberData[i]);
                }
            }
        }
        setResultData(array);
    }

    return (
        <div>
            <h2>Members Admin</h2>
            <button onClick={() => window.location.href = '/admin/addmember'}>
                <i className='bi bi-plus-circle-fill' title='Edit'></i>
                New Member
            </button>
            <div>
                <input type='text' placeholder='search' id='query' onKeyUp={handleSearch} />
                <select id='filter' onChange={handleSearch}>
                    <option value='email'>Email</option>
                    <option value='name'>Name</option>
                    <option value='education'>Education</option>
                </select>
                <button onClick={handleSearch}>Search</button>
                <div>
                    {
                        resultData.map((data) => (
                            <div key={data.id}>
                                <big>{data.name}</big>
                                <p>{data.email}</p>
                                <p>{data.education}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                memberData.map((data) => (
                    <div className='border' key={data.id}>
                        <big>Name: {data.name}</big>
                        <p>Email: {data.email}</p>
                        <p>Education:  {data.education}</p>
                        <details>
                            <summary title='menu'>...</summary>
                            <div className='border'>
                                    <Link to='/admin/editmember' state={{ email: data.email, name: data.name, education: data.education }}>
                                        <i className="bi bi-pencil-fill border" title='Edit'></i>
                                    </Link>
                                    <i className="bi bi-trash-fill border" title='Delete'></i>
                            </div>
                        </details>
                    </div>
                ))
            }
        </div>
    );
}
