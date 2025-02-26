import "./App.css";
import Name from "./name";
import Description from "./Description";
import Clock from "./Clock";

function App() {
  console.log("App Component");
  return (
    <div className="container">
      <Name></Name>
      <Description></Description>
      <Clock></Clock>
    </div>
  );
}

export default App;
