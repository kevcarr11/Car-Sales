import React from 'react';
import { connect } from "react-redux";
import { addTeslaFeature, removeTeslaFeature } from "../../actions/tesla"

import Header from '../../components/teslaDisplay/Heading';
import AddedFeatures from '../../components/teslaDisplay/AddedFeatures';
import AdditionalFeatures from '../../components/teslaDisplay/AdditionalFeatures';
import Total from '../../components/teslaDisplay/Total';


const TeslaView = (props) => {
  console.log("tesla",props)

 
  return (
    <>
      <div className="boxes">
        <div className="box">
          <Header car={props.car} />
          <AddedFeatures car={props.car} removeTeslaFeature={props.removeTeslaFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures ={props.additionalFeatures} addTeslaFeature={props.addTeslaFeature} />
          <Total /> 
        </div>
      </div>
    </>
  );
};

function mapStateToProps (state) {
return {
  additionalFeatures: state.tesla.additionalFeatures,
  additionalPrice: state.tesla.additionalPrice,
  car: state.tesla.car,
  }
}

 const mapDispatchToProps = {
  addTeslaFeature,
  removeTeslaFeature
 };

export default connect(mapStateToProps, mapDispatchToProps)(TeslaView);
