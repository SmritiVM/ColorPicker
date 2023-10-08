// import { useState } from "react";
import { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state = {bgcolor: "white",colorList: []};
        this.changeBG = this.changeBG.bind(this);
        this.pickColor = this.pickColor.bind(this);
    }

    changeBG(color){
        this.setState({bgcolor:color});
        
    }

    pickColor(){
        var colorItems = this.props.colorArray.map((color) => 
            <button key = {color} onClick = {this.changeBG.bind(this, color)} className = "colorButton" style={{backgroundColor:color, border:color}}></button>
        );
        this.setState({colorList: colorItems});

    }

    render(){
        
        return(
            <div>
            <h1>Color Picker</h1>
            <div style = {{backgroundColor: this.state.bgcolor}}>
                <div>{this.state.colorList}</div>
                <button onClick={this.pickColor}>Pick a color</button>
            </div>
            </div>
            
        )
    }

    
}
// function ColorPicker({colorArray}){
//     const [bgcolor, setBGColor] = useState("white");
//     const [ColorList, setColorList] = useState("");

//     // const handleClick = () =>{
//     //     setColorList(<div>
//     //         <div>
//     //             {pickColor()}
//     //         </div>
//     //     </div>)
//     // }
//     const pickColor = () => {
//         const colorItems = colorArray.map(color => 
//             <button key = {color} onClick = {changeBG(color)} className = "colorButton" style={{backgroundColor:color, border:color}}></button>
//         );
//         setColorList(<div>{colorItems}</div>)
//         // setColorList (
//         //     <div>
//         //         {colorArray.map(color_value => {
//         //             return(
//         //             <button key = {color_value} onClick = {changeBG(color_value)} className = "colorButton" style={{backgroundColor:color_value, border:color_value}}></button>
//         //             )
//         //         })}
//         //     </div>
//         // )
//     }
//     const changeBG = (color) => {
//         console.log(color);
//         // setColorList(
//         //     <div></div>
//         // );
//         // setBGColor(color);
//     }

//     return(
//         <div>
//             <h1>Color Picker</h1>
//             <div style = {{backgroundColor: bgcolor}}>
//                 {ColorList}
//                 <button onClick={pickColor}>Pick a color</button>
//             </div>
//         </div>
//     )
// }
export default ColorPicker;