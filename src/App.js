import React from 'react';
import MainAppProvider from './components/providers/MainAppProvider';
import BaseLayout from './components/BaseLayout';

// provider holds global state and functions and allows everything inside of it
// to import and use all global states and functions 

function App() {
  return (
    <MainAppProvider>
      <BaseLayout/>
    </MainAppProvider>
  );
}

export default App;
