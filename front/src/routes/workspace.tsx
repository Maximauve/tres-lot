import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/workspace/";

const routes = [
  <Route path="/kspaces/create" element={<Create />} key="create" />,
  <Route path="/kspaces/edit/:id" element={<Update />} key="update" />,
  <Route path="/kspaces/show/:id" element={<Show />} key="show" />,
  <Route path="/kspaces" element={<List />} key="list" />,
  <Route path="/kspaces/:page" element={<List />} key="page" />,
];

export default routes;
