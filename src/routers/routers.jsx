import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Loging from "../pages/Loging";
import Regigter from "../pages/Regigter";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import PrivateRoute from "./PrivateRoute";
import NewsDetails from "../component/NewsDetails";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
      },
      {
        path: "/loginpage",
        element: <Loging />,
      },
      {
        path: "/registerpage",
        element: <Regigter />,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile />,
      },
      {
        path: "/userprofile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default routers;
