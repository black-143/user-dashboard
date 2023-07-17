import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./ComingSoon.css";
const ComingSoon = ({ currentPath }) => {
  return (
    <>
      <Header currentPath={currentPath} />
      <div className="comingsoon-container">
        <div className="comingsoon-sidebar">
          <SideBar />
        </div>
        <div className="landing-page">Coming Soon</div>
      </div>
    </>
  );
};

export default ComingSoon;
