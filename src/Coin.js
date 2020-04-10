import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component{
    render(){
        return (
            <diV className="Coin">
                <img src={this.props.info.imgSrc}  alt = {this.props.info.side}/>
            </diV>
       
        )
    }
}

export default Coin;
