import React, { Component } from "react";
import loader from './loader.gif'
export default class Spinner extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="text-center">
            <img  src={loader} alt="News is loading ..." />
            </div>
        )
    }
}