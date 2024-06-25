import React, { useContext } from "react";
import { MyProfileContext } from "../../contexts/myProfileContext";
import { NavLink } from "react-router-dom";
import ReadPost from "../myPost/createPost/ReadPost";

const MyProfile = () => {
  const { state, createPost } = useContext(MyProfileContext);
  // console.log(state)
  return (
    <div>
      <div className="bdr">username</div>
      <div className="bdr flex gap-4">
        <div className="bdr ">profile pic</div>
        <div className="bdr flex gap-4">
          <div className="bdr">no of post : 10 </div>
          <div className="bdr">follower : 1001 </div>
          <div className="bdr">following : 101 </div>
        </div>
      </div>
      <div className="bdr">
        bio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
        reiciendis.
      </div>
      <hr />
      <div className="bdr">
        <button className="bdr">my post</button>
        <NavLink to="/createPostForm" className="bdr">
          <button className="bdr" onClick={() => createPost()}>
            create post
          </button>
        </NavLink>
      </div>
      <div>
        <ReadPost/>
      </div>
    </div>
  );
};

export default MyProfile;
