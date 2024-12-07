import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";
import Login from "../pages/Login";
const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/login", element: <Login></Login> },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
