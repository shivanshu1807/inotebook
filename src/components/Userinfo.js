import React, { useContext, useEffect } from 'react'
import userContext from '../context/user/userContext';
import Useritem from './Useritem';

const Userinfo = () => {
    const context = useContext(userContext);
    const { users, getUsers } = context;
    const arr = Object.values(users);
    useEffect(() => {
        if(localStorage.getItem('token')){
            getUsers()
        }
    }, [getUsers])
    return(
        <>
        <div className="row my-3">
                <h2>Your Details</h2>
                <div className="container mx-2"> 
                {users.length===0 && 'No users to display'}
                </div>
                {users.length > 0 && (
          <ul>
            {arr.map((user) => (
              <Useritem key={user._id} user={user} />
            ))}
          </ul> )}
            </div>
        </>
    )
}
export default Userinfo