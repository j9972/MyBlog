//import AuthForm from "components/AuthForm";
import App from "components/App";
//import { authService, firebaseInstance } from "fbase";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {faCode} from "@fortawesome/free-solid-svg-icons";

const Auth = () => {
    const onSocialClick = async(event) => {
        const {target:{name}} = event;
        let provider;
        if(name === "google") {
            // toDo: 구글 계정에 연결
            //provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            // toDo: 깃헙 계정에 연결
            //provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        //await authService.signInWithPopup(provider);
    }
    return (
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faCode}
                color={"#04AAFF"}
                size="3x"
                style={{ marginBottom: 30}}
            />
            <App />
            <div className="authBtns">
                <button name="google" className="authBtns" onClick={onSocialClick}>Continue with Google <FontAwesomeIcon icon={faGoogle} /></button>
                <button name="github" className="authBtns" onClick={onSocialClick}>Continue with Github <FontAwesomeIcon icon={faGithub} /></button>
            </div>
        </div>
    );
}

export default Auth;