import {  ADD_TESLA_FEATURE, REMOVE_TESLA_FEATURE } from "../actions/tesla";
import tesla from "../img/tesla.jpg";


const initialState = {
  additionalPrice: 0,
  car: {
    price: 72395,
    name: '2019 Tesla Sedan Model S',
    image: tesla,
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'Wheel Torque', price: 5000 },
    { id: 2, name: 'Extended Mile Range', price: 7000 },
    { id: 3, name: 'Personal Supercharger', price: 10000 },
    { id: 4, name: 'Tesla Black Paint', price: 2500 }
  ]
};

export function reducer(state = initialState, action ) {
  let updatedFeatures = []
  switch (action.type) {
  case ADD_TESLA_FEATURE:
    return {
      ...state,
      car: {
        ...state.car,
        price: state.car.price + action.payload.price,
        features: [
          ...state.car.features,
          action.payload
        ]
      },
      additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
    }
    case REMOVE_TESLA_FEATURE:
      updatedFeatures = state.car.features.filter(feature => feature.id !== action.payload.id)
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price - action.payload.price,
          features: updatedFeatures
        },
        additionalFeature: [...state.additionalFeatures, action.payload]
      }
    default:
      return state
  };
  
}