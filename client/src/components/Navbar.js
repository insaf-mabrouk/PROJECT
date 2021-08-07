import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { userSignout} from '../redux/actions/userAction'


const Navbar = ({titleSearch, setTitleSearch},props) => {
  
  const {user}= props
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.authReducer.userInfo);
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignout());
  };
  
    return (
        <div>
            <div>
      <header className="row">
        <div>
          <a className="brand" href="/">
            ArtZone
          </a>
        </div>
        <div>
          <Link to="/home">Home</Link>
        </div>
        
        {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.user.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                  <Link to="/signout" onClick={handelSubmit}>Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
           {userInfo && userInfo.user.isArtist && (
              <div className="dropdown">
                <Link to="#admin">
                  Artist <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/home">Products</Link>
                  </li>
                  <li>
                 <Link to="/add-product">add</Link>
                 </li>
                </ul>
              </div>
            )}
           { userInfo  && userInfo.user.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/home">Dashboard</Link>
                  </li>
                  <li>
                    
                    <Link to="/userlist">List Users</Link>
                  </li>
                  
                </ul>
              </div>
            )
           }
          
            {/* {userInfo ? (
              <div>
                <ul>
                  <li>
                    <Link to="/signout" onClick={handelSubmit}>
                     Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">Sign in</Link>
            )} */}
                
             
      </header>
      
    </div>
        </div>
    )
}

export default Navbar
