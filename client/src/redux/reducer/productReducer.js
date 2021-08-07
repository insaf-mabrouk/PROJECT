import { GET_PRODUCTS,DETAILS_FAIL, DETAILS_REQUEST, GET_DETAILS } from '../actions/productActionTypes'



export function productReducer (state= {products :[]}, action){ 
switch (action.type) {
    case GET_PRODUCTS:
        return{...state, products :action.payload}
    default:
        return state
}
}


export function productDetailsReducer (state = {product:{title:"", category:"", price:"", photo:""}} , action){
    
    switch (action.type){
       
        case GET_DETAILS:
            return {...state, product: action.payload };
            
            default: 
            return state
    }
    }

