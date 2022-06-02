import { useState } from "react";
import {API_HOST} from '../../global/constants'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./index.css";

export default function Register() {
  const [userName, setuserName] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  function addUser(){
    if(userName !=="" & pwd !== ""){
      axios.post(`${API_HOST}/user`, {
              'userName':userName,
              'passWord':pwd,
            })
           .then((res) => { 
              navigate('/room', {state: {_id : res.data.userId}})
            })
    }else if(userName === ""){
      alert("Please enter your account name!");
    }else{
      alert("Please enter your password!");
    }
  }

    return (
      <div className="app">
        <h1>Register</h1>
        <p>Username</p>
        <input type="text" value={userName} onChange={(e)=>setuserName(e.target.value)} />
        <p>Password</p>
        <input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
        <div>
          <button onClick={addUser} className="create">OK</button>
        </div>
      </div>
    );
  }