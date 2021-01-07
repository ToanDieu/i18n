import React from "react";
import ReactDOM from "react-dom";
import { Values } from "redux-form-website-template";
import { Provider, updateIntl } from "react-intl-redux";
import { addLocaleData } from "react-intl";
import esLocaleData from "react-intl/locale-data/es";
import store from "./store";
import SimpleForm from "./SimpleForm";

addLocaleData(esLocaleData);

const rootEl = document.getElementById("root");

const changeLocale = () => {
  let locale;
  if (store.getState().intl.locale === "en") {
    locale = {
      locale: "es",
      messages: {
        name: "Nombre"
      }
    };
  } else {
    locale = {
      locale: "en"
    };
  }
  store.dispatch(updateIntl(locale));
};

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm changeLocale={changeLocale} />
      <Values form="simple" />
    </div>
  </Provider>,
  rootEl
);
