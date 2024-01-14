import React from "react";

function Login(){
    function Logged(){
        console.log("you are successfully loged in")
    }

    return <div><button onClick={()=>Logged()}>login</button></div>
}

export default Login;