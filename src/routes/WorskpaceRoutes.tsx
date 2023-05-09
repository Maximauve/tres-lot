import React from "react";
import { Route, useParams } from "react-router-dom";

const WorkspaceHome: React.FC = () => {
	const slug: string = useParams().slug as string;
	return (
		<h1>Workspace {slug}</h1>
	)
}

const WorkspaceProject: React.FC = () => {
	const id: string = useParams().id as string;
	const slug: string = useParams().slug as string;
	return (
		<h1>Workspace {id}, project {slug}</h1>
	)
}

export const WorkspaceRoutes = [
	<Route path="/w/:slug" element={<WorkspaceHome />} key="1" />,
	<Route path="/w/:id/:slug" element={<WorkspaceProject />} key="2" />
]