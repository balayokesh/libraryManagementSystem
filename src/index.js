import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Login from './Routes/Login';
import Admin from './Admin';
import AdminLogin from './Routes/AdminLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/admin' element={<Admin />} />
				<Route exact path='/admin/login' element={<AdminLogin />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
