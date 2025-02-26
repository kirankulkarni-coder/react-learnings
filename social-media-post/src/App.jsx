import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import ListPosts from "./components/ListPosts";
import PostListProviderComponent from "./store/PostListProviderComponent";

function App() {
  let [selectedTab, setSelectedTab] = useState("Create Post");

  const handleSelectedTab = (selected) => {
    if (selected == "Home") {
      setSelectedTab("Home");
    } else {
      setSelectedTab("Create Post");
    }
  };

  return (
    <>
      <PostListProviderComponent>
        <div className="app_container">
          <Sidebar
            selectedTab={selectedTab}
            handleSelectedTab={(selectedTab) => handleSelectedTab(selectedTab)}
          ></Sidebar>
          <div className="content">
            <Header></Header>
            {selectedTab == "Home" ? (
              <ListPosts></ListPosts>
            ) : (
              <CreatePost></CreatePost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostListProviderComponent>
    </>
  );
}

export default App;
