import React from 'react';
import {Provider} from 'react-redux';
import {AspireAppRouter, Store} from './src';
import AspireContextProvider from './src/context';

const App = () => (
  <Provider store={Store}>
    <AspireContextProvider>
      <AspireAppRouter />
    </AspireContextProvider>
  </Provider>
);

export default App;
