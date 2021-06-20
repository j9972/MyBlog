import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePosts";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createpost"> Create A Post</Link>
        <Link to="/"> Home Page</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;