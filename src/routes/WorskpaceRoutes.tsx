import { Route, useParams } from "react-router-dom";
import Project from "src/pages/Project";

const WorkspaceHome = () => {
	const slug: string = useParams().slug as string;
	return (
		<h1>Workspace {slug}</h1>
	)
}

export const WorkspaceRoutes = [
	<Route path="/w/:slug" element={<WorkspaceHome />} />,
	<Route path="/w/:id/:slug" element={<Project />} />
]