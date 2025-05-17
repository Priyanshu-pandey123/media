import "./App.css";
import { Outlet } from "react-router-dom";
// import Footer from "./page/Footer";
// import Head from "./component/Head";
// import GalleryNav from "./component/GalleryNAv";

function App() {
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
