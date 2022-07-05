import { createStore, compose } from "redux";

import { rootReducer } from "./reducers/rootReducer.js";

const configureStore = () => {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, composeEnhancers());
};

const store = configureStore();

export default store;