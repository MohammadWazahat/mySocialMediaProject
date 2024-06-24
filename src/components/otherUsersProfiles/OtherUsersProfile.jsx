import React, { useContext } from "react";
import SingleUserProfile from "./SingleUserProfile";
import { OthersProfileContext } from "../../contexts/othersProfileContext";
import { NavLink } from "react-router-dom";

const OtherUsersProfile = () => {
  const { state } = useContext(OthersProfileContext);
  //  console.log(state.userProfiles)
  const data = state.userProfiles;
  return (
    <div>
      <div>
        <div>Search bar</div>
        <NavLink to="/followings" className="bdr">
          <div className="bdr m-2 ">
            <button className="bdr m-2 p-2 ">List of Following</button>
          </div>
        </NavLink>

        <div className="flex flex-col gap-8 m-2 p-2.5 ">
          {data.map((item, index) => {
            return <SingleUserProfile key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherUsersProfile;
