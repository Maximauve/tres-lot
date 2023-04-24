import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/table/";

const routes = [
	<Route path="/les/create" element={<Create />} key="create" />,
	<Route path="/les/edit/:id" element={<Update />} key="update" />,
	<Route path="/les/show/:id" element={<Show />} key="show" />,
	<Route path="/les" element={<List />} key="list" />,
	<Route path="/les/:page" element={<List />} key="page" />,
];

export default routes;
