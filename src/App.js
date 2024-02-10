import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from "react";
import Userinfo from "./components/Userinfo";
import UserState from "./context/user/UserState";
import UserDetails from './components/UserDetails';
function App() {
  const [alert, setAlert] = useState();
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <UserState>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/userinfo" element={<Userinfo/>}></Route>
              <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>              
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
              <Route path="/getuserdetails" element={<UserDetails />} />
            </Routes>
          </div>
          
        </Router>
      </NoteState>
      </UserState>
    </>
  );
}

export default App;
