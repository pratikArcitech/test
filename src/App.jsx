import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./assets/store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div class="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div class="content">
          <Header></Header>
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
