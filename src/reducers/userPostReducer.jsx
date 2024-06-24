const userPostReducer = (state,action) => {
    if(action.type === 'SAVE_MY_POST'){
        const newAddedPost = {
            profile_pic : action.payload.pay1.profile_pic ,
            name : action.payload.pay1.name ,
            username : action.payload.pay1.username ,
            post_pic : action.payload.pay1.post_pic ,
        }
        return {
            ...state ,
            savedPosts : [ ...state.savedPosts , newAddedPost ]
        }
    }
 return state ;
}

export default userPostReducer
