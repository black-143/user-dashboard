import { Link } from "react-router-dom";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="centered-links">
      <Link to="/profile">Profile</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/todo">To Do</Link>
    </div>
  );
};

export default SideBar;
