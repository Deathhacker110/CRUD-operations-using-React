import React from "react";
import {useNavigate} from "react-router-dom"
let Error = ()=>{
    let navigate=useNavigate()
    return(
        <div className="error">
            <h3>Error page</h3>
            <img src="https://th.bing.com/th/id/OIP.Jb4XrrIxatYfB2DQxV0TngHaFs?w=198&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" width={"200px"} height={"200px"}/>
            <h1>404 ! Page not Found</h1>
            <br />
            
            <button className="error_button" onClick={()=>{navigate("/")}}>Go Back to Home</button>
        </div>
    )
}
export default Error;