import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/actions/userAction'
import {Link} from 'react-router-dom'

const UserCard = ({user}) => {
    const dispatch = useDispatch()
    const supprime=()=>{
      dispatch(deleteUser(user._id))
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isArtist, setIsArtist] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [_id, setId]=useState('')
  
      const getPerson=(user)=>{
      setName(user.name)
      setEmail(user.email)
      setIsAdmin(user.isAdmin)
      setIsArtist(user.isArtist)
      setId(user._id)
      console.log(user,'user')

      }
    return (
        <div>
            <table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>IS ARTIST</th>
            <th>IS ADMIN</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isArtist ? 'YES' : ' NO'}</td>
              <td>{user.isAdmin ? 'YES' : 'NO'}</td>
              <td>
              
                <button onClick={supprime}>Delete</button>
              </td>
            </tr>
          
        </tbody>
      </table>
        </div>
    )
}

export default UserCard
