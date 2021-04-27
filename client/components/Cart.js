import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Cart extends Component {
  render() {
    return (
      <div>
        <p>My Cart 🛒 </p>
        <p>Total: ${this.totalAmount}</p>
        <Link to="/thanks">
          <button>Check Out</button>
        </Link>
      </div>
    );
  }
}

export default Cart;
