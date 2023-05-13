import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages/Home";
import React from "react";
import Signup from "src/pages/Signup";
import Login from "src/pages/Login";
import { WorkspaceHome } from "src/routes/WorskpaceRoutes";
import Project from "src/pages/Project";
import { GlobalLayout } from "src/pages/layout/GlobalLayout";

//todo : définir les routes "privées"
/*

faire un wrapper qui va vérifier si je suis déjà connecté, si oui je render le children, si non je redirige vers /login

*/

export const router = createBrowserRouter([
	{
		path: "/",
		element: <GlobalLayout />,
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