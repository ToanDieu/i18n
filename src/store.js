import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import { intlReducer } from "react-intl-redux";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  intl: intlReducer
});
const initialState = {
  intl: {
    locale: "en"
  }
};
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer, initialState);

export default store;
