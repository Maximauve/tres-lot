import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/comment/";

const routes = [
	<Route path="/ments/create" element={<Create />} key="create" />,
	<Route path="/ments/edit/:id" element={<Update />} key="update" />,
	<Route path="/ments/show/:id" element={<Show />} key="show" />,
	<Route path="/ments" element={<List />} key="list" />,
	<Route path="/ments/:page" element={<List />} key="page" />,
];

export default routes;
