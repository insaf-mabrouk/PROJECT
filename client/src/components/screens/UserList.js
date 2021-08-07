import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../redux/actions/userAction';


const UserList = (data) => {
  const users = useSelector((state)=>state.userListReducer.users)
  
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(listUsers());
  }, []);

    return (
        <div>
            <h1>Users</h1>
      
        <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>IS SELLER</th>
            <th>IS ARTIST</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isArtist ? 'YES' : ' NO'}</td>
              <td>{user.isAdmin ? 'YES' : 'NO'}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
        </div>
    )

  }

export default UserList
