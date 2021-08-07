import {combineReducers} from "redux"
import {authReducer, userDetailsReducer, userListReducer} from "./userReducer"
import { productDetailsReducer, productReducer } from "./productReducer"



export default combineReducers({
     productReducer,
     authReducer,
     productDetailsReducer,
     userListReducer,
     userDetailsReducer
})