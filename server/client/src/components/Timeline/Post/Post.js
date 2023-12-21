import "./Post.css";
import { FaHeart, FaComment } from "react-icons/fa";
import profilePicture from "./911.jpeg"; // Import the profile picture
import "./Post.css";

function Post({ post_id, postimage }) {
  return (
    <div className="post-container">
      <div className="user-info">
        <img className="profile-picture" src={profilePicture} alt="Profile" />
        <span className="profile-name">Username</span>
      </div>
      <img className="post-image" src={postimage} alt={`Post ${post_id}`} />
      <div className="post-actions">
        <FaHeart className="action-icon" />
        <FaComment className="action-icon" />
      </div>
    </div>
  );
}

export default Post;
