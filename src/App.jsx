import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./page/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
