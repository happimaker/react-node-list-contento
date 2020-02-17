import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { reducer, saga } from 'store';
import Router from 'pages/Router';

const middleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(middleware));

middleware.run(saga);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
