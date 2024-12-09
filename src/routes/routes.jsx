import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/signup";
const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/login", element: <Login></Login> },
  { path: "/signup", element: <Signup></Signup> },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
