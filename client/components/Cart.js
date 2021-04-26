import React, { Component } from 'react'

export class Cart extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
             
        // }
    }
    
    render() {
    const items = this.props.items || []
    const itemDict = {}

    for (var i=0; i < items.length; i++) {
        itemDict[items[i]] = (itemDict[items[i]] || 0) +1 ;
      }
    const keys = Object.keys(itemDict)

        return (
            <div>
                <p>My Cart</p>
                {keys.map((key)=>(
                    <div>
                    <span>{key}</span>
                    <span>{" Qty: "}</span>
                    <span>{itemDict[key]}</span> </div>
                ))}
            </div>
        )
    }
}

export default Cart
