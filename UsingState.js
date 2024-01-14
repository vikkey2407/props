import React  ,{Component}from "react";
class UsingState extends Component{
    constructor(){
        super() // used to overwrite  child
        this.state={
            order:" CLICK HER TO PLACE ORDER"
        }
    }
    changeContent(){
        this.setState({
            order: "you order has been placed "
        })
    }
    render(){
        return(<div><h1>{this.state.order}</h1>
        <button onClick={()=>this.changeContent()}>order</button></div>)
        
    }
}
export {UsingState}