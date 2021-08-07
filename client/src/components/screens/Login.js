
import React, { useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { userSignin } from '../../redux/actions/userAction';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    let history= useHistory()
   
    const handelSubmit = (e) => {
      e.preventDefault();
      dispatch(userSignin(email,password))
      
     
      if (!email || !password){
        
        history.push("/login")
        
      }
      else
       history.push("/home")
      
    }
    return (

        <div>
            <form className="form">
        <div>
          <h1>Sign In</h1>
        
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div className="email-error"></div>
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
          <div className="password-error"></div>
        </div>
        <div>
          <label />
          <button className="primary" type="submit" onClick={handelSubmit }>
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/inscription">Create your account</Link>
          </div>
        </div>
      </form>
        </div>
    )
}
export default Login
