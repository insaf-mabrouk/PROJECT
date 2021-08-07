import { AUTH_FAIL, USER_SIGNIN_SUCCESS,USER_SIGNOUT,USER_GET_AUTH,USER_REGISTER,SET_LOADING, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../actions/userActionTypes";

  const initialState = {
    token : localStorage.getItem("token") ,
    user : null , 
    isAuth : false ,
    isAdmin:false,
    isLoggedIn : false ,
    msg : null
  }

  
   export const authReducer = (state=initialState,{type,payload}) => {
    switch (type) {
      case USER_REGISTER:
        case USER_SIGNIN_SUCCESS:
          localStorage.setItem("token" , payload.token)
           return { ...state,isLoggedIn: true, userInfo:payload };   
        case USER_GET_AUTH:
         
        return { ...state, isLoggedIn: true, userInfo:payload };
      case SET_LOADING:
        return {isLoggedIn: false}
        case AUTH_FAIL:
          return { isLoggedIn: false };
        case USER_SIGNOUT:
          return {};
      default:
        return state;
    }
  }
export const userDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { loading: true };
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      
      default:
        return state;
    }
  };

  export const userListReducer = (state = { loading: true ,users:[]}, action) => {
    switch (action.type) {
      
      case USER_LIST_SUCCESS:
        return { ...state, loading: false, users: action.payload };
     
      default:
        return state;
    }
  };