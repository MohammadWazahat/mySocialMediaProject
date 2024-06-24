import React, { createContext, useReducer } from "react";
import reducer from "../reducers/othersProfileReducer";
import Data from "../dataFiles/OtherUsersProfile.json";

export const OthersProfileContext = createContext();

const OthersProfileProvider = ({ children }) => {
  const initialState = {
    userProfiles: Data,
    savedToFollowing : [] ,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToFollowing = (x) => {
    console.log(x);
    dispatch({type : 'ADD_TO_FOLLOWING' , payload : {
      pay1 : x ,
    }})
  };

  return (
    <OthersProfileContext.Provider
      value={{
        state: state,
        AddToFollowing: AddToFollowing,
      }}
    >
      {children}
    </OthersProfileContext.Provider>
  );
};

export default OthersProfileProvider;
