import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import your routes here
import App from './App';

const NotFound = () => (
	<h1>Not Found</h1>
);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" Component={App} />
				<Route Component={NotFound} />
			</Routes>
		</Router>
	</React.StrictMode>
);