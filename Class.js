import React ,{Component}from "react";

class Student extends Component{
    render(){
        return (<div><h1>{(this.props.children)}vignesh{this.props.lastname}</h1>  
        {console.log(this.props)}// here displays children details in console
        {console.log(this.props.children)}// here print children in web page
        </div>)
        
        
    }
}
export default Student