import image from "./images/icon-cart.svg"
import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <button className="btn">
        <img src={image} alt="" />
        <span>Add to Cart</span>
      </button>
    );
  };
}

export default Button;