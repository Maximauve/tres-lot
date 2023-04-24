import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import your routes here
import Home from './pages/Home';
import WorkspaceRoutes from './routes/workspace';
import NotFound from './pages/NotFound';
import "./styles/index.scss"


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" Component={Home} />
				{WorkspaceRoutes.map((route) => route)}
				<Route path="*" Component={NotFound} />
			</Routes>
		</Router>
	</React.StrictMode>
);