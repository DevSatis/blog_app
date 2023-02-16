import "./Post.css";

import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1675407743943-ec967a92558f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est totam nam
        sed molestias eos voluptatibus harum quas hic aperiam. Quas voluptate
        sit harum cumque debitis vel ex obcaecati distinctio veritatis.Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Est totam nam sed
        molestias eos voluptatibus harum quas hic aperiam. Quas voluptate sit
        harum cumque debitis vel ex obcaecati distinctio veritatis.Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Est totam nam sed
        molestias eos voluptatibus harum quas hic aperiam. Quas voluptate sit
        harum cumque debitis vel ex obcaecati distinctio veritatis.
      </p>
    </div>
  );
};

export default Post;
