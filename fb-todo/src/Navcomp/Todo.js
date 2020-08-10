import React,{useContext} from "react";
import {UserContext} from "./Navs"
import App from "../todo/App"
function Todo() {
    const user = useContext(UserContext)
    return(
      <div>
        <h2>Todo</h2>
        <App />
      </div>
    ) 
   
        
  }

  export default Todo;