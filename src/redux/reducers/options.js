const initialState = {
  title: {
    text: undefined,
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    categories: [],
  },
  yAxis: [
    {},
    {
      opposite: true,
    },
  ],
  series: [],
};

const UPDATE = "update";
const UPDATE_SERIES = "update-series";
const UPDATE_CATEGORIES = "update-categories";

const createUpdateAction = (payload) => ({
  type: UPDATE,
  payload,
});
const createUpdateSeriesAction = (payload) => ({
  type: UPDATE_SERIES,
  payload,
});
const createUpdateCategoriesAction = (payload) => ({
  type: UPDATE_CATEGORIES,
  payload,
});

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        series: action.payload.series,
        xAxis: {
          categories: action.payload.categories,
        },
      };
    case UPDATE_SERIES:
      return { ...state, series: action.payload };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        xAxis: {
          categories: action.payload,
        },
      };
    default:
      return state;
  }
};

export default optionsReducer;
export {
  UPDATE_SERIES,
  UPDATE_CATEGORIES,
  createUpdateAction,
  createUpdateSeriesAction,
  createUpdateCategoriesAction,
};
