import userContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
    const host = "http://localhost:5000"
    const userInf = []
    const [users, setUsers] = useState(userInf)
  
    // Get user Profile
    const getUsers = async () => {
      // API Call 
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json() 
      setUsers(json)
    }
    return (
    <userContext.Provider value={{ users, getUsers }}>
        {props.children}
      </userContext.Provider>
    )
  }
  export default UserState;
