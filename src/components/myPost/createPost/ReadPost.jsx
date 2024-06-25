import React, { useState, useEffect } from "react";
import axios from "axios";

import ReadSinglePost from "./ReadSinglePost";

const ReadPost = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8005/users");
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  // console.log(myUser);



  return (
    <div>
        <div>i ma read post</div>
      {myUser.map((item, index) => {
        return <ReadSinglePost key={index} {...item}/>
      })}
    </div>
  );
};

export default ReadPost;
