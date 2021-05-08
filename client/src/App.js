import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Login Page</a>
          <a href="/mainpage">Main Page</a>
          <a href="/createpost">Create Post</a>
        </div>
      </div>

      <Router>
        <Route path="/" exact render={(props) => <LoginPage />} /> 
        <Route path="/mainpage" exact render={(props) => <MainPage />} /> 
        <Route path="/createpost" render={(props) => <CreatePost />} />
        <Route path="/post/:postId" render={(props) => <Post />} />
      </Router>
    </>
  );
}

export default App;
