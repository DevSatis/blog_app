import "./Home.css";

import React, { useEffect, useState  } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPost = async ()=>{
      const res = await axios.get("/api/posts");
      console.log(res);
    }
    fetchPost();
  },[])
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
