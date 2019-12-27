import React from 'react';
import { createStore,compose } from 'redux';

import Entrance from 'pages/App'

import ReducerRoot from './reducer/index';

import { Provider } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  ReducerRoot,
  composeEnhancers()
)

interface Props { }

interface State { }

class App extends React.Component<Props, State> {

  render() {

    return (
      <Provider store={store}>
        <Entrance/>
      </Provider>
      
    )
  }
}

export default App;
