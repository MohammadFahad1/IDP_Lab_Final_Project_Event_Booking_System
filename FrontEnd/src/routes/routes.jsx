import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";
import Login from "../pages/Login";
import BookSchedule from "../pages/BookSchedule";
import Requirements from "../pages/Requirements";
import Payment from "../pages/Payment";
import Signup from "../pages/Signup";
import Root from "../layout/root";
import PrivateRoutes from "./PrivateRoutes";
import adminPanel from "./../assets/admin.jpg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <App></App> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      {
        path: "/eventscheduling",
        element: (
          <PrivateRoutes>
            <BookSchedule></BookSchedule>
          </PrivateRoutes>
        ),
      },
      {
        path: "/requirements",
        element: (
          <PrivateRoutes>
            <Requirements></Requirements>
          </PrivateRoutes>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoutes>
            <Payment></Payment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/admin-panel",
        element: (
          <PrivateRoutes>
            <img src={adminPanel} alt="" className="h-full w-full" />
          </PrivateRoutes>
        ),
      },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);

export default router;
