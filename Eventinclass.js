import React ,{Component} from "react";

class Sign extends Component {  // CAPITAL LETTERS IS MUST
    signup () {
        console.log("you are sucesssfully signed up")

    }


    render(){
        return (<div><button onClick={()=>this.signup()}>Signup</button></div>)
    }
}

export default Sign