import React from "react";
import AuthForm from "components/AuthForm"

const Auth = () => {
    return (
        <div>
            <AuthForm />
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
}