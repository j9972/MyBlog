import React from "react";
import { Route } from "react-router-dom";
import Auth from "routes/Auth";

const AppRouter = ({refreshUser , isLoggedIn , userObj }) => {
    return (
        <Router>
            {/* {isLoggedIn && <Navigation userObj={userObj}/>}
            <Switch>
                {isLoggedIn ? (
                    <div style={{maxWidth:890, width:"100%", margin: "0 auto", marginTop:80, display:"flex", justifyContent: "center"}}>
                        <Route exact path="/">
                            <Home userObj={userObj}/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj} refreshUser={refreshUser}/>
                        </Route>
                    </div> 
                    ) : ( 
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route> 
                    </>
                )}
            </Switch> */}

            <>
                <Route exact path="/">
                    <Auth />
                </Route> 
            </>
        </Router>
    )
}

export default AppRouter;