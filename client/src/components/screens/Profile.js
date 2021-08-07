import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { detailsUser, userGetAuth } from '../../redux/actions/userAction'



const Profile = () => {
 const user = useSelector((state)=>state.authReducer.userInfo.user)
 if(!user){
   return <h1>...loading</h1>
 }
    return (
     
     <div>
       <h1 style={{margin: "auto" ,width: "50%" ,border: "3px solid green"
  ,padding: "10px"
  ,textAlign:"center"}}>User Profile</h1>
      
  <h2 style={{paddingLeft: "30px", paddingTop:"50px"}}>name:<span style={{paddingLeft: "20px"}}>{user.name}</span></h2>
  <h2 style={{paddingLeft: "30px"}}>email:<span style={{paddingLeft: "20px"}}>{user.email}</span></h2>
     </div>             
) 
}
export default Profile
