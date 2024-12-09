import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/signup";
import BookSchedule from "../pages/BookSchedule";
const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/login", element: <Login></Login> },
  { path: "/signup", element: <Signup></Signup> },
  { path: "/eventscheduling", element: <BookSchedule></BookSchedule> },
  { path: "*", element: <NotFound></NotFound> },
]);

export default router;
