import "./Home.css";
import React, { useEffect, useState  } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("api/posts"+search);
      setPosts(res.data);
    }
    fetchPosts();
  },[search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
