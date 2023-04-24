import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/workspace/";
import Workspace from "src/pages/Workspace";

const routes = [
	<Route path="/workspaces/create" element={<Create />} key="create" />,
	<Route path="/workspaces/edit/:id" element={<Update />} key="update" />,
	<Route path="/workspaces/show/:id" element={<Show />} key="show" />,
	<Route path="/workspaces" element={<Workspace />} key="list" />,
	<Route path="/workspaces/:page" element={<List />} key="page" />,
];

export default routes;
