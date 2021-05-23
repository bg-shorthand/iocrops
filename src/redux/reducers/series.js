const initialState = [];

const UPDATE = "update";

const createUpdateAction = (payload) => ({
  type: UPDATE,
  payload,
});

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return [...action.payload];
    default:
      return state;
  }
};

export default seriesReducer;
export { UPDATE, createUpdateAction };
