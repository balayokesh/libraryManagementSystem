import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MembersAdmin() {

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
        <div className='bg-light p-3'>
            <h2 className='text-center m-3'>Members Admin</h2>
            <button onClick={() => window.location.href = '/admin/addmember'} className='btn btn-success m-3'>
                <i className='bi bi-plus-circle-fill' title='Edit'></i>
                &nbsp;
                New Member
            </button>
            {/* Start of search */}
            <details>
                <summary className='btn btn-success mx-3'>
                    <i className='bi bi-search' title='Edit'></i>
                    &nbsp;
                    Search
                </summary>
                <div className='border rounded p-3 text-center search-gradient'>
                    <input type='text' placeholder='search' id='query' onKeyUp={handleSearch} className='form-control w-50 d-inline' />
                    <select id='filter' onChange={handleSearch} className='form-control form-select w-25 d-inline' >
                        <option value='email'>Email</option>
                        <option value='name'>Name</option>
                        <option value='education'>Education</option>
                    </select>
                    <button onClick={handleSearch} className='btn btn-success d-inline'>Search</button>
                    <div className='p-3 text-left'>
                        {
                            (resultData.length === 0)
                                ?
                                <p className='text-center'>Search results appear here</p>
                                :
                                resultData.map((data) => (
                                    <div key={data.id} className='card m-1'>
                                        <div className='card-body'>
                                            <big>{data.name}</big> <span className='bg-primary text-white border rounded px-1'>{data.education}</span>
                                            <p>{data.email}</p>

                                            <Link to='/admin/editmember' className='mx-1' state={{ email: data.email, name: data.name, password: data.password, education: data.education }}>
                                                <button className='btn btn-outline-primary'>
                                                    <i className="bi bi-pencil-fill" title='Edit'>Edit</i>
                                                </button>
                                            </Link>
                                            <button className='btn btn-outline-danger mx-1'>
                                                <i className="bi bi-trash-fill" title='Delete'>Delete</i>
                                            </button>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </details>
            {/* End of search */}

            <table className='table table-striped table-bordered m-3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Education</th>
                        <th>Published year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        memberData.map((data) => (
                            <tr className='border' key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.education}</td>
                                <td>
                                    <Link to='/admin/editmember' state={{ email: data.email, name: data.name, password: data.password, education: data.education }}>
                                        <button className='btn btn-outline-primary mx-1'>
                                            <i className="bi bi-pencil-fill" title='Edit'>Edit</i>
                                        </button>
                                    </Link>
                                    <button className='btn btn-outline-danger mx-1'>
                                        <i className="bi bi-trash-fill" title='Delete'>Delete</i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
