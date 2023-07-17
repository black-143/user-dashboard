import "./Header.css";
const Header = ({ currentPath }) => {
  const userDetails = JSON.parse(localStorage.getItem("userDetailsState"));
  return (
    <header className="header">
      <h3 className="cur-page">{currentPath}</h3>
      <div className="gap"></div>
      <div className="user-details">
        <img src={userDetails?.profilepicture} alt="avatar" />
        <span>{userDetails?.username}</span>
      </div>
    </header>
  );
};

export default Header;
