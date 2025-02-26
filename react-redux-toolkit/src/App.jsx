import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const toggle = useSelector((store) => store.toggle.toggleValue);

  return (
    <>
      <Container>
        <div class="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div class="col-lg-6 mx-auto">
            {toggle ? <Privacy></Privacy> : <DisplayCounter></DisplayCounter>}
            <Controls></Controls>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
