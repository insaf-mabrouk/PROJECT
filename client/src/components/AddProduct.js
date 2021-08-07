import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { addProduct } from '../redux/actions/productAction'
import {useDispatch} from 'react-redux'

const AddProduct = () => {
   
    const[title,setTitle] = useState("")
    const[category,setCategory] = useState("")
    const[price,setPrice] = useState("")
    const [fileName,setFileName]=useState("")

   const onChangeFile = e =>{
     setFileName(e.target.files[0])
   }

    const dispatch = useDispatch()
    // const add=()=>{
    //     dispatch(addProduct({title,category,price,photo}))
    // }
    
const changeOnClick=(e)=>{

  e.preventDefault()
  const formData = new FormData()
  formData.append("title",title)
  formData.append("category",category)
  formData.append("price",price)
  formData.append("photo",fileName)
  dispatch((addProduct(formData))) 
  
 
  setTitle("")
  setCategory("")
  setPrice("")
  
}

    return (
        <div>
          <h1>Add your new painting</h1>
            <form  className ="form" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="title">title</label> 
            <input type="text" placeholder="enter title here" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="category">category</label>
            <input type="text"placeholder="enter the category here" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            <label htmlFor="price">price</label>
            <input type="text"placeholder="enter price here" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            {/* <input type="file"placeholder="enter link photo here" value={photo}/> */}
            </div>
            <div className="form-group">
            <label htmlFor="file">Choose your painting image</label>
            <input type="file" filename="photo" className="form-control-file"
            onChange={onChangeFile} />
            </div>
            </form>
           <Link to="/home"><button type="submit" onClick={changeOnClick} >add</button></Link> 
        </div>
    )
}
export default AddProduct
