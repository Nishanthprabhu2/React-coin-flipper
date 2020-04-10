import React, { Component } from "react";
import { choice } from './helpers'
import Coin from './Coin'
import './CoinContainer.css'

class CoinContainer extends Component{
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
          ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips:0,
            nHeads:0,
            nTails:0,
        };
        this.handleClick = this.handleClick.bind(this);
       
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 0:1),
                nTails: st.nTails + (newCoin.side === "tails" ? 0:1)
            }
        })

    }

   handleClick(e){
    this.flipCoin();
    }

    render(){
        return(
           <div className="CoinContainer">
                <h1>Let's Flip A coin</h1>
                
                { this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button className="btn btn-outline" onClick = {this.handleClick}>Flip me</button>
                <p>
                    Out of {this.state.nFlips} flips, there have been {this.state.nHeads} {" "} heads and {this.state.nTails} tails.
                </p>

           </div> 
        )
    }
}

export default CoinContainer;
