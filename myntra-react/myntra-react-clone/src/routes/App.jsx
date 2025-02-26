import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
