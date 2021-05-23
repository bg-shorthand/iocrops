import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import seriesReducer from "./reducers/series";

const rootReducer = combineReducers({
  series: seriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
