import React, { createContext, useReducer, useState } from "react";
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
    // console.log(x);
    dispatch({type : 'ADD_TO_FOLLOWING' , payload : {
      pay1 : x ,
    }})
  };

  const [viewData, setViewData] = useState();
  const viewProfile = (x) =>{
    // console.log("i m clicked")
    // console.log(x)
    setViewData(x);
    // console.log(viewData);
  }

  const deleteFollowing = (x) => {
    // console.log(x);
    dispatch({ type : 'DELETE_FROM_FOLLOWING' , payload : {
        pay1 : x ,
    }})
  }


  return (
    <OthersProfileContext.Provider
      value={{
        state: state,
        AddToFollowing: AddToFollowing,
        viewProfile : viewProfile ,
        viewData : viewData ,
        deleteFollowing : deleteFollowing,
      }}
    >
      {children}
    </OthersProfileContext.Provider>
  );
};

export default OthersProfileProvider;
