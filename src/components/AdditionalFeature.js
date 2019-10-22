import React from 'react';
import { connect } from "react-redux";

const AdditionalFeature = props => {

    const handleAdd = () => {

    }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAdd} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
  
}

export default connect()(AdditionalFeature);
