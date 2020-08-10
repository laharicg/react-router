import React,{useContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Post from "./Components/Post/Post"
import Todo from "./Todo";

export const UserContext = React.createContext(null);
export const AboutContext = React.createContext(null);

export default function Navs() {
  const [Name,setName]=useState("Lahari",[]);
  const [user,setUser]=useState({name:"Neeha"})


  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <UserContext.Provider value ={{Name,setName}}>
          <AboutContext.Provider value ={{user,setUser}}>

          <Route path="/timeline" exact>
            <Post />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          </AboutContext.Provider>
          </UserContext.Provider>
          
        </Switch>
      </div>
    </Router>
  );
}
