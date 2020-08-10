import React,{useContext} from "react";
import {UserContext} from "./Navs"
function Home() {
    const user = useContext(UserContext)
    return <div className="container p-3" >
        <h2 >Hello!</h2>
        <p>Welcome Folks!</p>
        </div>
   
        
  }
  export default Home;