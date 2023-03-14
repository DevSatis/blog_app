import "./SinglePost.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const SinglePost = () => {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);

  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + path);
      setPost(res.data);
    }
    getPost();
  }, [path]);

  const handleDelete =async()=>{
    try{
      await axios.delete(`/api/posts/${post._id}`, {data:{username: user.username}});
      window.location.replace("/");
    }catch(err){

    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={PF + post.photo}
            alt=""
            className="singlePostImg"
          />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user.username &&
            (
              <div className="singlePostEdit">
                <BorderColorOutlinedIcon className="singlePostIcon" />
                <DeleteIcon className="singlePostIcon" onClick={handleDelete} />
              </div>
            )}

        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link"> <b>{post.username}</b> </Link>

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
