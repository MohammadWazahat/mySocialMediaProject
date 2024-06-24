const othersProfileReducer = (state,action) => {
  if(action.type === 'ADD_TO_FOLLOWING'){
    return {
      ...state ,
      savedToFollowing : [ ...state.savedToFollowing , action.payload.pay1 ]
  }
  }
  return state ;
}

export default othersProfileReducer
