import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import ErrorPage from "./page/ErrorPage";
import Auth from "./page/Auth";
import Profile from "./page/Profile";
import Post from "./page/Post";
import UserList from "./component/UserList";
import GalleryContainer from "./page/GalleryContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "gallery",
        element: <GalleryContainer />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
]);

export default router;
