import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import store from redux
import { createStore } from 'redux';

//import all reducers
import allReducers from './reducers';

//link our app to the store
import { Provider } from 'react-redux';

//Create our global state for our app
const zooStore = createStore(
  allReducers,
  //enable us to see the state with redux devtool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <React.StrictMode>
    {/* prodider is wrapped around the app so all components can access the state */}
    <Provider store={zooStore}>  
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);