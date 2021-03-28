import React from "react";
import { Route } from "react-router-dom";
import Auth from "routes/Auth";

const AppRouter = () => {
    return (
        <Router>
            <Route exact path="/">
                <Auth />
            </Route> 
        </Router>
    )
}

export default AppRouter;