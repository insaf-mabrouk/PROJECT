import React,{useState,useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom'
import Login from './components/screens/Login';
import Inscription from './components/screens/Inscription';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ProductCart from './components/ProductCart';
import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from './redux/actions/productAction';
import Product from './components/screens/Product';

import spinner from './spinner.gif'
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/screens/Profile';
import UserList from './components/screens/UserList';
import Buy from './components/Buy';

import UserCard from './components/screens/UserCard';
import { listUsers, userGetAuth } from './redux/actions/userAction';
import EditUser from './components/screens/EditUser';
import Banner from './components/screens/Banner';
import Home from './components/screens/Home';
import Footer from './components/screens/Footer';
import About from './components/screens/About';
import EntryPage from './components/screens/EntryPage';


// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dispatch = useDispatch()

    const product = useSelector((state)=>state.productReducer.products)
    // useEffect(()=>{
    //     dispatch(getProducts())
    // },[])
    const users = useSelector((state)=>state.userListReducer.users)
    // useEffect (()=>{
    //   dispatch(listUsers())
    // ,[]})
  const getUser =()=> dispatch(userGetAuth())
  // console.log("userGetAuth",userGetAuth)
  
  useEffect(() => {
    getUser()
    console.log("getuser",getUser())
  }, [])

    const [titleSearch, setTitleSearch] =useState("")
    const[title,setTitle] = useState("")
    const[category,setCategory] = useState("")
    const[price,setPrice] = useState("")
    const[photo,setPhoto] = useState("")
    const[_id, set_Id] = useState('')

    const getInformation=(product)=>{
        setTitle(product.title)
        setCategory(product.category)
        setPrice(product.price)
        setPhoto(product.photo)
        set_Id(product._id)
        }
  return (
    <Router>
      <div className="grid-container">
        
        <Navbar/>
        
        <Switch>
          
        <Route exact path="/" component = {EntryPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/inscription" component={Inscription}/>
        <Route path="/add-product" component={AddProduct}/>
        <Route path="/about" component={About}/>
        
        <Route path="/product/:id" render={(props)=><Product {...props} product={product} />}/> 
        
        <Route exact path="/home" render={()=><div> <div><Banner  titleSearch={titleSearch} setTitleSearch={setTitleSearch}/></div><div className="row center" >
        {! product.length ? (<img src ={spinner} alt="loading"/>):(
        product.filter(product=>product.title.toLowerCase().includes(titleSearch.toLowerCase().trim()))
        .map(product=> <ProductCart key={product._id} product={product}
        getInformation={getInformation}  />))}</div></div>}/>

        <Route path="/edit-product" render={()=><div>
        <EditProduct title={title} setTitle={setTitle} category={category}setCategory={setCategory} price={price} 
        setPrice={setPrice} photo={photo} setPhoto={setPhoto} _id={_id} getInformation={getInformation}/></div>}/> 
        
        <PrivateRoute path="/profile" component ={Profile}/>
          {/* <Route path="/userlist" component={UserList} ></Route> */}
        
        <Route path="/buy/:id"  render={(props)=><Buy {...props}/>}/>
        
        <Route path="/userlist" render ={()=><div>{users.map(user=> <UserCard key={user._id} user={user}/>)}</div>}/>
        
        <Route path="/edituser" render={()=><div><EditUser users={users}/></div>}/>

        {/* <Route path={`/details/${product._id}`} render = {(product)=><div>
          <Product key={product._id} product={product} getInformation={getInformation}/> </div>}/> */}


            {/* <Link to="/add-product"> <button className="btn btn-primary">Add-product</button></Link>
                <Route path="/add-product" render={()=><div>
                    <AddProduct/>
                </div>}/> */}
                  
     </Switch>
    <Footer/>
      </div>
      </Router>
  );
}

export default App;
