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
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/public/news.json'),
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: () => fetch('/public/news.json'),
      },
      {
        path: '/loginpage',
        element: <Loging></Loging>
      },
      {
        path: '/registerpage',
        element: <Regigter></Regigter>
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/userprofile',
        element: <UserProfile></UserProfile>
      }
    ],
  },
]);

export default routers;
