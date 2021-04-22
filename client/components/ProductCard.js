import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={`/products/${this.props.product.id}`}>
          <h3>{this.props.product.name}</h3>
          <img src={this.props.product.image} />
        </Link>
      </div>
    );
  }
}

export default ProductCard;
