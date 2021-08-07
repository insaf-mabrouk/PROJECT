import { DETAILS_FAIL, DETAILS_REQUEST,GET_DETAILS, GET_PRODUCTS} from './productActionTypes'
import axios from 'axios'



// export const addProduct=(formData)=>dispatch=>{
//     axios.post('api/product/postproduct', formData)
//     .then(res=>dispatch(getProducts()))
//     .catch(err=>console.log(err))
// }
export const addProduct =(bodyFormData) => async(dispatch)=>{
    
    try {
      const option = {
         headers : {'Content-Type': 'multipart/form-data'}}
      const res = await axios.post('/api/product/postproduct', bodyFormData,option );
      dispatch(getProducts())
    } catch (error) {
        console.log(error,'posting fail') 
    }
      
  }
  
// axios({
//     method: 'post',
//     url: 'myurl',
//     data: bodyFormData,
//     headers: {'Content-Type': 'multipart/form-data' }
//     })
//     .then(function (response) {
//         //handle success
//         console.log(response);
//     })
//     .catch(function (response) {
//         //handle error
//         console.log(response);
//     });
export const updateProduct=(idProduct, updatedProduct)=>dispatch=>{
    axios.put(`/api/product/updateproduct/${idProduct}`, updatedProduct)
    .then(res=>dispatch(getProducts()))
    .catch(err=>console.log(err))
}

export const deleteProduct=(idProduct)=>dispatch=>{
    axios.delete(`/api/product/deleteproduct/${idProduct}`)
    .then(res=>dispatch(getProducts()))
    .catch(err=>console.log(err))
}

export const getProducts=()=>dispatch=>{
    axios.get('api/product/')
    .then(res=>dispatch({type:GET_PRODUCTS , payload:res.data}))
    .then(res=>console.log("res",res))
    .catch(err=>console.log(err))
}


export const detailsProduct=(props)=>dispatch=>{
    axios.get(`api/product/product/${props.match.params.id}`)
    .then(res=>dispatch({type:GET_DETAILS , payload:res.data}))
    .then(res=>console.log("res",res))
    
    .catch(err=>console.log(err),[props])
}

    
    

    
