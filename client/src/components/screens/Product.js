import React, { useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link , useParams} from 'react-router-dom'
import { detailsProduct } from '../../redux/actions/productAction'



const Product = ({props}) => {
   console.log(props,"props")
   const[title,setTitle]=useState("")
   const[category,setCategory]=useState("")
   const[price,setPrice]=useState("")
   const[photo,setPhoto]=useState("")
   
  const product = useSelector((state)=>state.productDetailsReducer.product)
    const idProduct = props.match.params.id;
    console.log(idProduct,"idProduct")
    const dispatch = useDispatch()
    useEffect((props)=>{
    dispatch(detailsProduct(product)),[dispatch,product]})
   
    return (
        <div>
            <div>
      <Link to="/">Back to result</Link>
     
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.photo} alt={product.title}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.title}</h1>
            </li>
            <li>Pirce : ${product.price}</li>
            <li>
              Description:
              <p>{product.category}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
             
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
    
        </div>
    )
}

export default Product
