import { Route, useParams } from "react-router-dom";

const WorkspaceHome = () => {
	const slug: string = useParams().slug as string;
	return (
		<h1>Workspace {slug}</h1>
	)
}

const WorkspaceProject = () => {
	const id: string = useParams().id as string;
	const slug: string = useParams().slug as string;
	return (
		<h1>Workspace {id}, project {slug}</h1>
	)
}

export const WorkspaceRoutes = [
	<Route path="/w/:slug" element={<WorkspaceHome />} />,
	<Route path="/w/:id/:slug" element={<WorkspaceProject />} />
]