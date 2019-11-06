import React from 'react';
import { connect } from "react-redux";
import { addFeature, removeFeature } from "../../actions/additionalFeature"

import Header from '../../components/mustangDisplay/Header';
import AddedFeatures from '../../components/mustangDisplay/AddedFeatures';
import AdditionalFeatures from '../../components/mustangDisplay/AdditionalFeatures';
import Total from '../../components/mustangDisplay/Total';


const MustangView = (props) => {
  console.log("mustang",props)

 
  return (
    <>
      <div className="boxes">
        <div className="box">
          <Header car={props.car} />
          <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures ={props.additionalFeatures} addFeature={props.addFeature} />
          <Total /> 
        </div>
      </div>
    </>
  );
};

function mapStateToProps (state) {
return {
  additionalFeatures: state.mustang.additionalFeatures,
  additionalPrice: state.mustang.additionalPrice,
  car: state.mustang.car
}
}

 const mapDispatchToProps = {
  addFeature,
  removeFeature
 };

export default connect(mapStateToProps, mapDispatchToProps)(MustangView);
