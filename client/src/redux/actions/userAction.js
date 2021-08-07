
import { AUTH_FAIL, USER_SIGNIN_SUCCESS,USER_SIGNOUT,USER_GET_AUTH,USER_REGISTER,SET_LOADING,USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from './userActionTypes'
import axios from 'axios'


const authState=
{
user:null,
isAdmin:false,
isArtist:false,
isLoggedIn:false
}



// register user
export const register = (name,email,password,isArtist) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const res = await axios.post('/api/authentification/inscription', {name,email,password,isArtist});
      console.log(res,"res")
      dispatch({ 
        type: USER_REGISTER,
         payload: res.data 
      })
      localStorage.setItem("userInfo", JSON.stringify(res.data));
    } catch(error) {
    console.dir(error)
      const errorsArray = error.response.data.errors
      if(Array.isArray(errorsArray)){
        errorsArray.forEach(el=>alert(el))
      }
         dispatch({
          type : AUTH_FAIL,
          payload:{}
      })
      }
      
  };

  // login user
  export const userSignin =(email, password) => async(dispatch)=>{
    dispatch(setLoading())
    try {
      const res = await axios.post('/api/authentification/login', { email, password });
      dispatch({ 
        type: USER_SIGNIN_SUCCESS,
         payload: res.data 
      })
      // localStorage.setItem("userInfo", JSON.stringify(res.data)); 
    } catch(error) {
      
      console.dir(error)
      const errorsArray = error.response.data.errors
      if(Array.isArray(errorsArray)){
        errorsArray.forEach(el=>alert(el))
      }
         dispatch({
          type : AUTH_FAIL
      })
      }
  }
 
   // auth user
   export const userGetAuth =() => async(dispatch)=>{
    dispatch(setLoading())
    try {
      const option = {
         headers : {authorization : localStorage.getItem("token")}}
      const res = await axios.get('/api/authentification/isMe', option);
      dispatch({
        type: USER_GET_AUTH ,
         payload: res.data
      })
      // return authState
    } catch(error) {
      console.log(error)
         dispatch({
          type : AUTH_FAIL
      })
      // return authState
      } 
  }

  // set loading
  export const setLoading =() => async(dispatch)=>{
    dispatch({  
        type: SET_LOADING
    }) 
  }

  // logout
  export const userSignout =() => async(dispatch)=>{
    dispatch({  
        type: USER_SIGNOUT
    }) 
    localStorage.removeItem('userInfo');
  }

  
    // //USER DETAILS
    // export const detailsUser = (userId) => async (dispatch, getState) => {
    //   dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
      
    //   try {
    //     const {
    //       signin: { userInfo },
    //     } = getState();
        
    //     const { data } = await axios.get(`/api/users/${userId}`, {
    //       headers: {
    //         Authorization: `Bearer ${userInfo.token}`,
    //       },
    //     });
        
    //     dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    //   } catch (error) {
    //     const message =
    //       error.response && error.response.data.message
    //         ? error.response.data.message
    //         : error.message;
    //     dispatch({ type: USER_DETAILS_FAIL, payload: message });
    //   }
    // };
  
    // /LIST USERS
    export const listUsers=()=>dispatch=>{
      axios.get('/api/users/')
      .then(res=>dispatch({type:USER_LIST_SUCCESS, payload: res.data}))
      // .then(res=>console.log("res",res))
      .catch(err=>console.log(err))
  }
  export const updateUser=(idUser, updatedUser)=>dispatch=>{
    axios.put(`/api/users/updateuser/${idUser}`, updatedUser)
    .then(res=>dispatch(listUsers()))
    .catch(err=>console.log(err))
}

export const deleteUser=(idUser)=>dispatch=>{
    axios.delete(`/api/users/deleteuser/${idUser}`)
    .then(res=>dispatch(listUsers()))
    .catch(err=>console.log(err))
}
    // export const listUsers = () => async (dispatch) => {
      
    //   dispatch({ type: USER_LIST_REQUEST });

    //   try {
        
    //     const {res} = await axios.get('api/users/');
    //     dispatch({ type: USER_LIST_SUCCESS, payload: res.data });
    //   } catch (error) {
    //     const message =
    //       error.response && error.response.data.message
    //         ? error.response.data.message
    //         : error.message;
    //     dispatch({ type: USER_LIST_FAIL, payload: message });
    //   }
    // };