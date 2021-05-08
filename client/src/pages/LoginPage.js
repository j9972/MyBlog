import React, { useState } from 'react'
import Axios from 'axios';
import "../App.css"
//id, password
export default function LoginPage() {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const submitPost = () => {
        Axios.post('http://localhost:3000/api/login', 
        {
            userId: userId,
            userPassword: userPassword,
        });
    }

    return (
        <div className="LogPage">
            <div className="LoginPage">
                <label>ID</label>
                <input type="text" placeholder="id/email" onChange={(e) => {setUserId(e.target.value)}}/>
                <label>Password</label>
                <input type="password" placeholder="password" onChange={(e) => {setUserPassword(e.target.value)}}/>

                <button onClick={submitPost}>Submit Post</button>
            </div> 
        </div>
    )
}