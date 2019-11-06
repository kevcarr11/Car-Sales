export const ADD_TESLA_FEATURE = "ADD_TESLA_FEATURE";
export const REMOVE_TESLA_FEATURE = "REMOVE_TESLA_FEATURE";

export function addTeslaFeature(feature) {
  return {
    type: ADD_TESLA_FEATURE,
    payload: feature
  };
}

export function removeTeslaFeature(feature) {
  return {
    type:  REMOVE_TESLA_FEATURE,
    payload: feature
  }
}