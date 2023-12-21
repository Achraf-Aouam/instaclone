import "./Timeline.css";
import Post from "./Post/Post";
import React, { useEffect, useState } from "react";

function Timeline() {
  const [posts, setposts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/getPosts");
      const jsonData = await response.json();
      setposts(jsonData);

      // console.log(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="timeline-container">
      {posts.map((post) => (
        <Post
          key={post.post_id}
          post_id={post.post_id}
          postimage={post.post_pic}
        />
      ))}
    </div>
  );
}

export default Timeline;
