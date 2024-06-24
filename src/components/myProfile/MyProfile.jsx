import React from "react";

const MyProfile = () => {
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
        <button className="bdr">create post</button>
      </div>
    </div>
  );
};

export default MyProfile;
