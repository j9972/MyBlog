import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Home Page</a> 
          <a href="/register">Register Page</a> 
          {/* 회원가입 */}
          <a href="/login">Login Page</a> 
          {/* 로그인 */}
          <a href="/createpost">Create Post</a> 
          {/* post 쓰는 페이지 */}
        </div>
      </div>

      <Router>
        <Route path="/" exact render={(props) => <HomePage />} /> 
        <Route path="/register" exact render={(props) => <RegisterPage />} /> 
        <Route path="/login" exact render={(props) => <LoginPage />} /> 
        <Route path="/createpost" render={(props) => <CreatePost />} />
        <Route path="/post/:postId" render={(props) => <Post />} />
      </Router>
    </>
  );
}

export default App;
