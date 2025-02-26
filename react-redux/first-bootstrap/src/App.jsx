import AppName from "../AppName";
import AppItem1 from "../AppItem1";
import Items from "./Items";
import "./App.css";

function App() {
  let items = [
    { task: "Buy Milk", date: "8th feb 2025" },
    { task: "Go to College", date: "8th feb 2025" },
  ];

  return (
    <div>
      <AppName class="name"></AppName>
      <div class="appItems">
        <AppItem1></AppItem1>
        <Items items={items}></Items>
      </div>
    </div>
  );
}

export default App;
