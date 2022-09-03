import React from "react";
import Button from "./Button";

class Details extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className='details'>
        <p>perfume</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
            a floral. solar and voluptous interpretation composed by olivier
            polge, Perfumer-Creator for the house of CHANEL
        </p>
        <h1>$149.99</h1>
        <s>$169.99</s>
        <Button />
      </div>
    );
  };
}

export default Details;