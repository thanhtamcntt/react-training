import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
 
class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul className="list-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
 
}

export default App;