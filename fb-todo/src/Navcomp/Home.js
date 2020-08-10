import React,{useContext} from "react";
import {UserContext} from "./Navs"
function Home() {
    const user = useContext(UserContext)
    return <div>
        <h2>Home</h2>
        </div>
   
        
  }
  export default Home;