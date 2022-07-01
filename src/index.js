import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Member from './Routes/Member/Member';
import Login from './Routes/Member/Login';
import SignUp from './Routes/Member/SignUp';
import MemberCheckOut from './Routes/Member/MemberCheckOut';
import Admin from './Routes/Admin/Admin';
import AdminLogin from './Routes/Admin/AdminLogin';
import AddBook from './Routes/Admin/AddBook';
import AddMember from './Routes/Admin/AddMember';
import EditBook from './Routes/Admin/EditBook';
import EditMember from './Routes/Admin/EditMember';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />} />
				
				<Route exact path='/member' element={<Member />} />
				<Route exact path='/member/login' element={<Login />} />
				<Route exact path='/signup' element={<SignUp />} />
				<Route exact path='/member/checkout' element={<MemberCheckOut />} />

				<Route exact path='/admin' element={<Admin />} />
				<Route exact path='/admin/addbook' element={<AddBook />} />
				<Route exact path='/admin/addmember' element={<AddMember />} />
				<Route exact path='/admin/editbook' element={<EditBook />} />
				<Route exact path='/admin/editmember' element={<EditMember />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
