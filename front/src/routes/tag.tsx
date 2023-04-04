import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/tag/";

const routes = [
  <Route path="/s/create" element={<Create />} key="create" />,
  <Route path="/s/edit/:id" element={<Update />} key="update" />,
  <Route path="/s/show/:id" element={<Show />} key="show" />,
  <Route path="/s" element={<List />} key="list" />,
  <Route path="/s/:page" element={<List />} key="page" />,
];

export default routes;
