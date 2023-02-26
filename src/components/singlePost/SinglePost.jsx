import "./SinglePost.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import {useLocation} from "react-router";
import axios from "axios";

const SinglePost = () => {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get("/api/posts/"+path);
      setPost(res.data);
    }
    getPost();
  },[path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
          src={post.photo}
          alt=""
          className="singlePostImg"
        />
        )}
        
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <BorderColorOutlinedIcon className="singlePostIcon" />
            <DeleteIcon className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{post.username}</b>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
