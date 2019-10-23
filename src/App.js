import React from 'react';
import { Route } from "react-router-dom"
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/additionalFeature";

import Starter from "./components/Starter";
import MustangView from "./components/mustangDisplay/MustangView";
import TeslaView from './components/teslaDisplay/TeslaView';

const App = (props) => {
  console.log(props)

 
  return (
    <>
    <Route exact path="/" component={Starter} />
    <Route path="/mustang" render={() => <MustangView removeFeature={props.removeFeature}
    additionalFeatures ={props.additionalFeatures} addFeature={props.addFeature} {...props} />} />
    <Route path="/tesla" render={() => <TeslaView removeFeature={props.removeFeature}
    additionalFeatures ={props.additionalFeatures} addFeature={props.addFeature} {...props} />} />
    </>
  );
};



 

function mapStateToProps (state) {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    car: state.car
  }
  }
  
   const mapDispatchToProps = {
    addFeature,
    removeFeature
   };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
