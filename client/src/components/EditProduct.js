import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateProduct } from '../redux/actions/productAction'

const EditProduct = ({title,setTitle,category,setCategory,price,setPrice,photo,setPhoto,_id,props}) => {
  
 const dispatch = useDispatch()
 const editProd = () =>{
    dispatch(updateProduct(_id,{title,category,price,photo}))
 }
 
    return (
        <div> 
            <form className ="form">
           <div> <label htmlFor="title">title</label> 
           <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/> </div>
           <div> <label htmlFor="title">category</label> 
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/> </div>
           <div><label htmlFor="price">Price</label>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/> </div>
           <div> <label htmlFor="image">Image</label> 
           <input type="text" value={photo} onChange={(e)=>setPhoto(e.target.value)}/> </div>
           <div>
              {/* <label htmlFor="imageFile">Image File</label>
              <input type="file" id="imageFile" label="Choose Image" onChange={uploadFileHandler}></input>
              {loadingUpload} */}
              
            </div>
            <Link to="/home"><button onClick={editProd}>edit</button></Link> 
            </form>
        </div>
    )
}

export default EditProduct

