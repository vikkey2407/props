import React ,{Component} from "react";

class Count extends Component{
    constructor(){
        super()
        this.state={
            Count:0
        }
    }

    Increment(){
        this.setState({
            Count:this.state.Count + 1,
        },()=>{console.log(this.state.value)})
    }
    Decrement(){
        this.setState({
            Count:this.state.Count - 1,
        })
    }
    render(){
        return (<div><h1>Count={this.state.Count}</h1>
        <button onClick={()=> this.Increment()}>INCREMENT</button>
        <button onClick={()=> this.Decrement()}>Decrement</button></div>)
        
    }
}
export default Count