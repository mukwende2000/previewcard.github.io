import React from "react";
import image from "./images/image-product-desktop.jpg"

class Frame extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className='frame'>
        <img src={image} alt="alternative" />
      </div>
    );
  };
}

export default Frame;