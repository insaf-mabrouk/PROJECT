import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateUser } from '../../redux/actions/userAction'

const EditUser = ({user}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isArtist, setIsArtist] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [_id, setId]=useState('')
  
      const getPerson=(users)=>{
      setName(users.name)
      setEmail(users.email)
      setIsAdmin(users.isAdmin)
      setIsArtist(users.isArtist)
      setId(users._id)

      }
    const dispatch = useDispatch()
    const editUser = () =>{
        dispatch(updateUser (_id,{name,email,isArtist,isAdmin}))
     }
    return (
        <div>
            <h1>Edit User </h1>
            <form form className="form">
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="isArtist">Is Artist</label>
              <input type="checkbox" checked={isArtist} onChange={(e) => setIsArtist(e.target.checked)}></input>
            </div>
            <div>
              <label htmlFor="isAdmin">Is Admin</label>
              <input id="isAdmin" type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)}></input>
        </div>
        <Link to="/userlist"><button onClick={editUser}>edit</button></Link>
        </form>
        </div>
    )
}

export default EditUser
