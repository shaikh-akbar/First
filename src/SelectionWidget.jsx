import React from "react";
import { Component,useState } from "react";

export default class SelectionWidget extends Component{
   
   
    


    constructor(props){
        super(props);
        this.state={
            name:[
                'Red',
                'Green',
                'Yellow',
                
            ]
        }
    }
    
    render(){
        return(
            <div className="main-btn">
                
                {/* <button className="btn">{this.state.name[0]}</button>
                <button className="btn">{this.state.name[1]}</button>
                <button className="btn">{this.state.name[2]}</button> */}
                {
                    this.state.name.map((value,index)=>(
                        <button className="btn" >{value}</button>
                    ))
                }
              
            </div>
            
        )
    }
}
// import React from 'react'

// function SelectionWidget() {
//     constructor(props){
//         super(props);
//         this.state={
//             name:[
//                 'Red',
//                 'Green',
//                 'Yellow',
                
//             ]
//         }
//   return (
//     <div className='main-btn'>
//       <button id='btn1' onClick={setColor}>Red</button>
//       <button id='btn2' onClick={setColor}>Blue</button>
//       <button id='btn3' onClick={setColor}>Green</button>
//     </div>
//   )
// }

// export default SelectionWidget
