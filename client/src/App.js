import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
        <a href="/">Home Page</a> 
          {/* homepage */}
          <a href="/loginpage">Login Page</a> 
          {/* loginpage */}
          <a href="/mainpage">Main Page</a> 
          {/* post올라간거 보이는 곳 */}
          <a href="/createpost">Create Post</a> 
          {/* post 쓰는 페이지 */}
        </div>
      </div>

      <Router>
        <Route path="/" exact render={(props) => <HomePage />} /> 
        <Route path="/loginpage" exact render={(props) => <LoginPage />} /> 
        <Route path="/mainpage" exact render={(props) => <MainPage />} /> 
        <Route path="/createpost" render={(props) => <CreatePost />} />
        <Route path="/post/:postId" render={(props) => <Post />} />
      </Router>
    </>
  );
}

export default App;
