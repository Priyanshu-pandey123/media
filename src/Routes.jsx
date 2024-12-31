import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import ErrorPage from "./page/ErrorPage";
import Auth from "./page/Auth";
import Profile from "./page/Profile";
import Post from "./page/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "/post",
        element: <Post />,
      },
    ],
  },
]);

export default router;
