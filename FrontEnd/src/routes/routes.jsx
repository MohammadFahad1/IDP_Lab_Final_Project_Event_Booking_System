import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";
import Login from "../pages/Login";
import BookSchedule from "../pages/BookSchedule";
import Requirements from "../pages/Requirements";
import Payment from "../pages/Payment";
import Signup from "../pages/Signup";
import Root from "../layout/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <App></App> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/eventscheduling", element: <BookSchedule></BookSchedule> },
      { path: "/requirements", element: <Requirements></Requirements> },
      { path: "/payment", element: <Payment></Payment> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);

export default router;
