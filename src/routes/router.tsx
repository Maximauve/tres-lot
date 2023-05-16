import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages/Home";
import React from "react";
import Signup from "src/pages/Signup";
import Login from "src/pages/Login";
import { WorkspaceHome } from "src/routes/WorskpaceRoutes";
import Project from "src/pages/Project";
import { GlobalLayout } from "src/pages/layout/GlobalLayout";
// import { PrivateRoute } from "src/routes/PrivateRoute";


export const router = createBrowserRouter([
	{
		path: "/",
		element:
			// <PrivateRoute>
			<GlobalLayout />,
		// </PrivateRoute>,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "w",
				children: [
					{
						path: ":slug",
						element: <WorkspaceHome />
					},
					{
						path: ":id/:slug",
						element: <Project />
					}
				],
			},
		]
	},
	{
		path: "sign-up",
		element: <Signup />,
	},
	{
		path: "login",
		element: <Login />,
	},
])