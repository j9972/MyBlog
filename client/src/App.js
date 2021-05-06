import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainpage';
import CreatePost from './pages/createpost';

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/createpost">Create Post</a>
        </div>
      </div>

      <Router>
        <Route path="/" exact render={(props) => <MainPage />} /> 
        <Route path="/createpost" render={(props) => <CreatePost />} />
        {/* <Route path="/post/:postId" render={(props) => <Post />} /> */}
      </Router>
    </>
  );
}

export default App;
