import React, { useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/userAction';


const Inscription = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]=useState('')
    const [isArtist, setIsArtist] = useState(false);
    console.log("isArtist",isArtist)
    
    const dispatch = useDispatch()
    let history= useHistory()
    const handelSubmit = (e) => {
        e.preventDefault();
       
        dispatch(register(name,email,password,isArtist))
        history.push("/home")
      }
      
      const userRegister = useSelector((state) => state.authReducer);
      
      console.log("userRegister",userRegister)
     
    return (
        
            <div>
            <form className="form">
        <div>
          <h1>Create Account</h1>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
              <label htmlFor="isArtist">Tick if you are an Artist</label>
              <input 
              type="checkbox" 
              checked={isArtist} 
              onChange={(e) => setIsArtist(e.target.checked)}>
              </input>
            </div>
        <div>
          <label />
          <button className="primary" type="submit"onClick={handelSubmit }>
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to= "/login">Sign-In</Link>
          </div>
        </div>
      </form>
        </div>
        
    )
}

export default Inscription




