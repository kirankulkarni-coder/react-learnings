import AppName from "./AppName";
import AppItem1 from "./AppItem1";
import Items from "./Items";
import "./App.css";
import TodoProviderComponent from "./store/TodoProviderComponent";

function App() {
  return (
    <TodoProviderComponent>
      <div>
        <AppName class="name"></AppName>
        <div class="appItems">
          <AppItem1></AppItem1>
          <Items></Items>
        </div>
      </div>
    </TodoProviderComponent>
  );
}

export default App;
