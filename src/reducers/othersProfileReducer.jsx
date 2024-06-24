const othersProfileReducer = (state, action) => {
  if (action.type === "ADD_TO_FOLLOWING") {
    return {
      ...state,
      savedToFollowing: [...state.savedToFollowing, action.payload.pay1],
    };
  }

  if (action.type === "DELETE_FROM_FOLLOWING") {
    // console.log(action.payload)
    const updatedFollowing = state.savedToFollowing.filter(
      (item) => item.user_id !== action.payload.pay1.user_id 
    );
    return {
      ...state,
      savedToFollowing : updatedFollowing,
    };
  }


  return state;
};

export default othersProfileReducer;
