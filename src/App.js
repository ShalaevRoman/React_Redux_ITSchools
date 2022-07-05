import * as React from 'react';
import {Provider} from 'react-redux';

import Home from "./containers/Home.js"
import store from "./redux/store.js";


const App = () => {
  return (
      <Provider store={store}>
        <Home />
      </Provider>
  )
}

export default App;
