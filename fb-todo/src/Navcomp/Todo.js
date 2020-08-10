import React,{useContext} from "react";
import {UserContext} from "./Navs"
import App from "../todo/App"
function Todo() {
    const user = useContext(UserContext)
    return(
      <div>
        <App />
      </div>
    ) 
   
        
  }

  export default Todo;