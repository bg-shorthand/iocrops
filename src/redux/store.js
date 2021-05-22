import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import seriesReducer from "./reducers/series";

const rootReducer = combineReducers({
  series: seriesReducer,
});

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
