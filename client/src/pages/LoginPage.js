import React, { useState } from 'react'
import Axios from 'axios';
import "../App.css"
//id, password
export default function LoginPage() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [userFullName, setUserFullName] = useState("");
    const [userconfirmPassword, setUserConfirmPassword] = useState("");

    // const Login = () => {
    //     Axios.post('http://localhost:3000/api/login', 
    //     {
    //         userEmail: userEmail,
    //         userPassword: userPassword,
    //     });
    // }

    const register = () => {
        Axios.post('http://localhost:3000/api/register', 
        {
            userFullName: userFullName,
            userEmail: userEmail,
            userPassword: userPassword,
            userconfirmPassword: userconfirmPassword,
        });
    }

    return (
        <div className="LogPage">
            <div className="LoginPage">
                <div className="login_part1">
                    <label>email</label>
                    <input type="email" placeholder="id/email" onChange={(e) => {setUserEmail(e.target.value)}}/>
                    <label>Password</label>
                    <input type="password" placeholder="password" onChange={(e) => {setUserPassword(e.target.value)}}/>

                    <button onClick={register}>Login</button>
                </div>

                <div className="login_part2">
                    <label>FullName</label>
                    <input type="text" placeholder="FullName" onChange={(e) => {setUserFullName(e.target.value)}}/>
                    <label>email</label>
                    <input type="email" placeholder="id/email" onChange={(e) => {setUserEmail(e.target.value)}}/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => {setUserPassword(e.target.value)}}/>
                    <label>confirmPassword</label>
                    <input type="password" placeholder="confirmPassword" onChange={(e) => {setUserConfirmPassword(e.target.value)}}/>

                    <button onClick={register}>register</button>
                </div>
            </div> 
        </div>
    )
}