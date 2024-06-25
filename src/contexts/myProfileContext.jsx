import React, { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/myProfileReducer";

export const MyProfileContext = createContext();

const MyProfileProvider = ({ children }) => {
  const initialState = {
    x: 10,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const createPost = () => {
    // console.log("i m clicked");
    // console.log(state);
  };

  return (
    <MyProfileContext.Provider
      value={{
        state: state,
        createPost: createPost,
      }}
    >
      {children}
    </MyProfileContext.Provider>
  );
};

export default MyProfileProvider;
