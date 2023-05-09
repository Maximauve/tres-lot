import React from "react";
import { Route, useParams } from "react-router-dom";
import Project from "src/pages/Project";

export const WorkspaceHome: React.FC = () => {
	const slug: string = useParams().slug as string;
	return (
		<h1>Workspace {slug}</h1>
	)
}

export const WorkspaceRoutes = [
	<Route path="/w/:slug" element={<WorkspaceHome />} key="1" />,
	<Route path="/w/:id/:slug" element={<Project />} key="2" />
]