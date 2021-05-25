import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import optionsReducer from "./reducers/options";

const rootReducer = combineReducers({
  options: optionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
