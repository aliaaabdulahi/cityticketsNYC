import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Cart from './Cart'

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItems: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  componentDidMount() {
    this.props.loadProducts();
  }

  handleAdd(evt){
    const newItems = this.state.selectItems
    newItems.push(evt.target.name)

    this.setState({
      selectItems: newItems
    })
  }

  render() {
    const products = this.props.products || [];

    return (
      <div>
      <Cart items = {this.state.selectItems}/>
        {products
          ? products.map((product) => (
            <div>
              <ProductCard product={product} key={product.id} />
              <button onClick={this.handleAdd} key={product.id} name={product.name}>+</button>
            </div> 
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
