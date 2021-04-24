import React, { Component } from 'react'

export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
    const hotdogs = this.props.items || []
    // const hotdogs = ['candy', 'handy']
        return (
            <div>
                <p1>My Cart</p1>
                {hotdogs.map((hotdog)=>(
                    <div>{hotdog}</div>
                ))}
            </div>
        )
    }
}

export default Cart
