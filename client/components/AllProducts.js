import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

class AllProducts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const products = this.props.products || [];
    console.log(products);
    return (
      <div>
        {products
          ? products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : "loading"}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
