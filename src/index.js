import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Login from './Routes/Member/Login';
import SignUp from './Routes/Member/SignUp';
import Admin from './Admin';
import AdminLogin from './Routes/Admin/AdminLogin';
import AddBook from './Routes/Admin/AddBook';
import AddMember from './Routes/Admin/AddMember';
import EditBook from './Routes/Admin/EditBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/signup' element={<SignUp />} />
				<Route exact path='/admin' element={<Admin />} />
				<Route exact path='/admin/login' element={<AdminLogin />} />
				<Route exact path='/admin/addbook' element={<AddBook />} />
				<Route exact path='/admin/addmember' element={<AddMember />} />
				<Route exact path='/admin/editbook' element={<EditBook />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
