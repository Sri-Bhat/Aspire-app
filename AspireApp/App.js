import React from 'react';
import {Provider} from 'react-redux';
import {AspireAppRouter, Store} from './src';
import AspireContextProvider from './src/context';

// Aspire app: Context and Redux configured Here
// Few standards are following throughout the flow:
// 1. Following DRY-(Don't Repeat Yourself) principles: All common codes are moved separated and made reused
// 2. Neat documentation
// 3. Dynamic implementations: Ex: Localization, React Context, Redux: Can be used by any one.
// 4. All components: Prop validations

const App = () => (
  <Provider store={Store}>
    <AspireContextProvider>
      <AspireAppRouter />
    </AspireContextProvider>
  </Provider>
);

export default App;
