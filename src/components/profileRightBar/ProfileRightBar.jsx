import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import "./profileRightBar.scss";

const ProfileRightBar = () => {
  const [getUserInfo, setGetUserInfo] = useState({});
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getInfo = () => {
      const unSub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        setGetUserInfo(doc.data());
      });
      return () => {
        unSub();
      };
    };
    currentUser.uid && getInfo();
  }, [currentUser.uid]);

  console.log(getUserInfo);

  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle"> User Information</span>
        <Link
          to={`/profile/${currentUser.displayName}/edit`}
          style={{ textDecoration: "none" }}
        >
          <span className="editButton">Edit Profile</span>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">
            {getUserInfo.email ? getUserInfo.email : currentUser.email}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone Number: </span>
          <span className="profileRightBarInfoValue">{getUserInfo.phone}</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Age: </span>
          <span className="profileRightBarInfoValue">{getUserInfo.age}</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Country: </span>
          <span className="profileRightBarInfoValue">
            {getUserInfo.country}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Relationship: </span>
          <span className="profileRightBarInfoValue">
            {getUserInfo.relationship}
          </span>
        </div>
      </div>

      <h4 className="profileRightBarTitle">Close Friends</h4>
      <div className="profileRightBarFollowings">
        <div className="profileRightBarFollowing">
          <img
            src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679552307/friend1_oophbh.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Janet</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679552415/friend2_xtkkv9.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Isabella</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679552472/friend3_zodtbd.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">pujita</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679552597/friend4_tgx6r8.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Glenna</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679552597/friend4_tgx6r8.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Alexis</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679744205/Charming-Hairstyles-for-Teen-Boys-8_sieyr4.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Kate</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightBar;
