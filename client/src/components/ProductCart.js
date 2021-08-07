import React from 'react'
import { deleteProduct, detailsProduct } from '../redux/actions/productAction'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Rating from './Rating'


const ProductCart = ({product,getInformation,props}) => {
  const userInfo = useSelector((state) => state.authReducer.userInfo);
  // const idProduct= props.match.params.id
    const dispatch=useDispatch()
    const supprime=()=>{
     dispatch(deleteProduct(product._id))
    }
    const details=()=>{
      dispatch(detailsProduct(product._id))
    }

    const buyHandler = (props) => {
      props.history.push(`/buy/${product._id}`);
    };
    return (
      
        <div key={product._id} className="card">
          {userInfo ? (
               <div className="card-body">
               {/* <Link to = {`/product/${product._id}`}> */}
               
                <h2>title: {product.title}</h2> 
                {/* </Link> */}
                
                <p>category: {product.category}</p>
                {/* <Link to={`/product/${product._id}`}> */}
              <img className="medium" src={product.photo} alt="..." />
            {/* </Link> */}
                 {/* <img className="medium" src={`/uploads/${product.productPhoto}`} alt="..." /> */}
                
                <div className="price"> Price: {product.price} DT</div> 
                <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
                <button onClick={buyHandler} className="primary block" >Buy</button>
                </div>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
           { userInfo  && userInfo.user.isArtist && (
               <div className="card-body">
               {/* <Link to = {`/product/${product._id}`}> */}
               
                <h2>title: {product.title}</h2> 
                {/* </Link> */}
                
                <p>category: {product.category}</p>
                {/* <Link to={`/product/${product._id}`}> */}
              <img className="medium" src={product.photo} alt="..." />
            {/* </Link> */}
                 {/* <img className="medium" src={`/uploads/${product.productPhoto}`} alt="..." /> */}
                
                <div className="price"> Price: {product.price} DT</div> 
                
                <Link to="/edit-product"> <button onClick={()=>getInformation(product)}> edit</button></Link>
                <button className='btn-danger' onClick={supprime}>delete</button> 
                {/* <Link to = {{pathname: `/product/${product._id}`}}><button>details</button> </Link>
                <button onClick={buyHandler} className="primary block" >Buy</button> */}
                </div>
            )}
           { userInfo  && userInfo.user.isAdmin && (
               <div className="card-body">
               {/* <Link to = {`/product/${product._id}`}> */}
               
                <h2>title: {product.title}</h2> 
                {/* </Link> */}
                
                <p>category: {product.category}</p>
                {/* <Link to={`/product/${product._id}`}> */}
              <img className="medium" src={product.photo} alt="..." />
            {/* </Link> */}
                 {/* <img className="medium" src={`/uploads/${product.productPhoto}`} alt="..." /> */}
                
                <div className="price"> Price: {product.price} DT</div> 
                <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
                
                <button className='btn-danger' onClick={supprime}>delete</button> 
                
                </div>
            )
           }
        </div>
    )
}
export default ProductCart
