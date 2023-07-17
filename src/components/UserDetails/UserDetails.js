import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./UserDetails.css";

const UserDetails = ({ currentPath }) => {
  const userDetails = JSON.parse(localStorage.getItem("userDetailsState"));
  return (
    <>
      <Header currentPath={currentPath} />
      <div className="details-container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="profile-details">
          <img
            src={userDetails?.profilepicture}
            className="user-avatar"
            importance="high"
            alt="avatar"
          />
          <h3> {userDetails?.name} </h3>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>:</td>
                  <td>{userDetails?.username}</td>
                </tr>
                <tr>
                  <td>e-mail</td>
                  <td>:</td>
                  <td>{userDetails?.email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>{userDetails?.phone}</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>:</td>
                  <td>{userDetails?.website}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ruler"></div>
          <div>
            <table>
              <caption>Company</caption>
              <tbody>
                <tr style={{ textAlign: "right" }}>
                  <td>Name</td>
                  <td>:</td>
                  <td>{userDetails?.company.name}</td>
                </tr>
                <tr>
                  <td>catch phrase</td>
                  <td>:</td>
                  <td>{userDetails?.company.catchPhrase}</td>
                </tr>
                <tr>
                  <td>bs</td>
                  <td>:</td>
                  <td>{userDetails?.company.bs}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="profile-details">
          <dl>
            <dt>Address:</dt>
            <dd>Street: {userDetails?.address.street}</dd>
            <dd>Suite: {userDetails?.address.suite}</dd>
            <dd>City: {userDetails?.address.city}</dd>
            <dd>Zipcode : {userDetails?.address.zipcode}</dd>
          </dl>
          <img
            className="user-map"
            src="https://i.ibb.co/C5WSJ1R/maps.png"
            alt="maps"
            border="0"
          />
          <div className="location">
            <table>
              <tbody>
                <tr>
                  <td>Lat</td>
                  <td>:</td>
                  <td>{userDetails?.address.geo.lat}</td>
                  <td>Long</td>
                  <td>:</td>
                  <td>{userDetails?.address.geo.lng}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
