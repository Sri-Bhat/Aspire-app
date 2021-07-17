import React from 'react';
import {Provider} from 'react-redux';
import {AspireAppRouter, Store} from './src';

const App = () => (
  <Provider store={Store}>
    <AspireAppRouter />
  </Provider>
);

export default App;
