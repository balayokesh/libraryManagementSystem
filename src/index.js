import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Admin from './Admin';
import Login from './Routes/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />} />
				<Route exact path='/admin' element={<Admin />} />
				<Route exact path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
