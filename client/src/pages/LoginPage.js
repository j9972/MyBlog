import React, { useState } from 'react'
import Axios from 'axios';
import "../App.css"
//id, password
export default function LoginPage() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const Login = () => {
        Axios.post('http://localhost:3005/login', 
        {
            userEmail: userEmail,
            userPassword: userPassword,
        }).then((res) => {
            console.log(res);
        });
    }

    return (
        <div className="LogPage">
            <div className="login_nav">
                <label>email</label>
                <input type="email" placeholder="id/email" onChange={(e) => {setUserEmail(e.target.value)}}/>
                <label>Password</label>
                <input type="password" placeholder="password" onChange={(e) => {setUserPassword(e.target.value)}}/>

                <button onClick={Login}>Login</button>
            </div>
        </div>
    )
}