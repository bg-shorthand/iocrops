const initialState = [];

const UPLOAD = "upload";

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD:
      return [...action.payload];
    default:
      return state;
  }
};

export default seriesReducer;
export { UPLOAD };
