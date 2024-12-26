import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import ErrorPage from "./page/ErrorPage";
import Counter from "./page/Counter";
import Auth from "./page/Auth";

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
    ],
  },
]);

export default router;
