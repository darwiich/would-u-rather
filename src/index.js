import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import "semantic-ui-css/semantic.min.css";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/lib/integration/react";

// the following code I got from stack overflow answer as I didn't know how to persist the redux state
const persistConfig = {
  key: ["authedUser", "questions", "users"],
  storage: storage,
  whitelist: ["authedUser", "questions", "users"],
};
const pReducer = persistReducer(persistConfig, reducer);

const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
