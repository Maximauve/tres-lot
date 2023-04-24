import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/user/";

const routes = [
	<Route path="/rs/create" element={<Create />} key="create" />,
	<Route path="/rs/edit/:id" element={<Update />} key="update" />,
	<Route path="/rs/show/:id" element={<Show />} key="show" />,
	<Route path="/rs" element={<List />} key="list" />,
	<Route path="/rs/:page" element={<List />} key="page" />,
];

export default routes;
