import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice + props.additionalPrice}</h4>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    carPrice: state.mustang.car.price,
    additionalPrice: state.mustang.additionalPrice
  }
}

export default connect(mapStateToProps)(Total);
