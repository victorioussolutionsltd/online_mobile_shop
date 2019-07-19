import React, { Component } from "react";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";
import Product from "./Product";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };

  render() {
    //console.log(this.state.products);

    return (
      <React.Fragment>
        <div className="py-5" />

        <div className="container">
          <Title name="our" title="products" />
          <div className="row" />
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}
