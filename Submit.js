import React ,{Component} from "react";

class Response extends Component{
    constructor(){
        super()
        this.state={
            submit:"CLICK HERE TO SUBMIT"
        }
    }
    AfterSubmit(){
        this.setState({
            submit:"YOURS DETAILS ARE SUBMITTED"

        })

    }

    render(){
        return (<div><h1>{this.state.submit}</h1>
        <button onClick={()=>this.AfterSubmit()}>SUBMIT</button>
        </div>)
    }
}
export default Response