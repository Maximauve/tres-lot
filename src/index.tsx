import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import your routes here
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import "./styles/index.scss"


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<div>
				<section>                              
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/home" element={<Home/>}/>
						<Route path="/signup" element={<Signup/>}/>
						<Route path="/login" element={<Login/>}/>
					</Routes>                    
				</section>
			</div>
		</Router>
	</React.StrictMode>
);