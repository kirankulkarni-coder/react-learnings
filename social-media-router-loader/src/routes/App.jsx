import "./App.css";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import CreatePost from "../components/CreatePost";
import { useState } from "react";
import ListPosts from "../components/ListPosts";
import PostListProviderComponent from "../store/PostListProviderComponent";
import { Outlet } from "react-router-dom";

function App() {
  let [selectedTab, setSelectedTab] = useState("Create Post");

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
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </div>
      </PostListProviderComponent>
    </>
  );
}

export default App;
