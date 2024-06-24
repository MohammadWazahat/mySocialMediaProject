import React, { useContext } from 'react'
import { OthersProfileContext } from '../../contexts/othersProfileContext'

const Following = () => {
const {state} =  useContext(OthersProfileContext);
console.log(state.savedToFollowing)
const myFollowing = state.savedToFollowing ;
  return (
    <div>
  
      {
        myFollowing.map((item,index)=>{
          return <div key={index}> {item.user_id} </div>
        })
      }
    </div>
  )
}

export default Following
