import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

const Title = props => (
  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
    <h1>{props.title}</h1>
  </div>
);

const Label = ({ children }) => (
  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">{children}</div>
);

const PriceLabel = props => (
  <h4 className="text-blue">
    <strong>
      price : <span>£</span>
      {props.price}
    </strong>
  </h4>
);

const InfoLabel = () => (
  <p className="text-capitalize font-weight-bold mt-3 mb-0">
    some ifo about product:
  </p>
);

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              <Title title={title} />
              {/* end title */}
              {/*product info */}
              <div className="row">
                <Label>
                  <img src={img} className="img-fluid" alt="product" />
                </Label>
                <Label>
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <PriceLabel price={price} />
                  <InfoLabel />
                  <p className="text-muted lead">{info}</p>

                </Label>

                <Link to="/">
                <ButtonContainer>
                    back to product
                </ButtonContainer>
                <ButtonContainer
                cart
                disabled={inCart}
                onClick={()=>{
                    value.addToCart(id)
                }}
                >
                    {inCart ? "inCart" : "add to cart"}
                </ButtonContainer>
                </Link>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
