import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/card/";

const routes = [
  <Route path="/ds/create" element={<Create />} key="create" />,
  <Route path="/ds/edit/:id" element={<Update />} key="update" />,
  <Route path="/ds/show/:id" element={<Show />} key="show" />,
  <Route path="/ds" element={<List />} key="list" />,
  <Route path="/ds/:page" element={<List />} key="page" />,
];

export default routes;
