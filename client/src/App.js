import "./cssFile/App.css";
import "./cssFile/CreatePost.css";
import "./cssFile/Login.css";
import "./cssFile/Post.css";
import "./cssFile/navbar.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";

import { AuthContext } from "./helpers/AuthContext";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    // 로그인의 여부를 false로 나둬야 로그인 버튼을 눌렀을때 status의 boolean값의 변화를 볼 수 있음
    status: false,
  });

  let history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          // if문의 ...authState는 useState에 쓴 기본값을 의미하고 err가 있을경우는 기본값으로 값을 유지 시킨다는 것
          // -> 여기서 에러가 났을때 기본값을 유지하는 방법을 알 수 있음
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    // session.removeItem or session.getItem은 리턴값이 없다. -> 조건문 x₩
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    //history.push('/login');
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <div className="navbar">
            <div className="links">
              {!authState.status ? (
                <>
                  <Link to="/login"> Login</Link>
                  <Link to="/registration"> Registration</Link>
                </>
              ) : (
                <>
                  <Link to="/"> Home Page</Link>
                  <Link to="/createpost"> Create A Post</Link>
                </>
              )}
            </div>
            <div className="loggedInContainer">
              <h1>{authState.username} </h1>
              {authState.status && <button onClick={logout} > Logout</button>}
            </div>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createpost" exact component={CreatePost} />
            <Route path="/post/:id" exact component={Post} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/login" exact component={Login} />
            <Route path="/profile/:id" exact component={Profile} />
            <Route path="/changepassword" exact component={ChangePassword} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;