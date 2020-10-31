import React, {Component} from "react";
import "./square.css";

let rotdirection = "";
let numbdirection = "-";

class Square extends Component {
    state = {click: 0};
  
    
    onIncrement = () => {
     this.setState({click: this.state.click + 1});
     
    }
    

    onReload = () => {
        this.setState({click: 0});
    }

    onLeft = () => {
        return (
            rotdirection = "-",
            numbdirection = ""
        )
    }
    onRight = () => {
        return (
            rotdirection = "",
            numbdirection = "-"
        )
    }
    startLeft = () => {
        this.onIncrement();
        this.onLeft();
    }
    startRight = () => {
        this.onIncrement();
        this.onRight();
    }
   
    
    render (){
    const colorchange = this.state.click;
    const rotation = colorchange; 
    const changecolor = ((colorchange % 2) > 0) ? "red" : "blue";
    const rot = {
    transform: `rotate(${rotdirection}${rotation}deg)`,
    backgroundColor: `${changecolor}`
    };
    const number = {
    transform: `rotate(${numbdirection}${rotation}deg)`
    };
    
  console.log(rotation);
        return(
        <div>    
        <div className="square" onClick={this.onIncrement} style = {rot}>
        <h3 className="h3"style = {number} >{rotdirection}{rotation}</h3>
        </div>
        <div className = "buttonbox">
        <button className = "button" onClick={this.startLeft}>Left</button>    
        <button className="button" onClick={this.onReload}>Reload</button>
        <button className = "button" onClick={this.startRight}>Right</button>
        </div>
        </div>
         );
    }
   
}


export default Square;