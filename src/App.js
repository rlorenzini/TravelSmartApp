import React from 'react';
import MainAppProvider from './components/providers/MainAppProvider';
import BaseLayout from './components/BaseLayout';

function App() {
  return (
    <MainAppProvider>
      <BaseLayout/>
    </MainAppProvider>
  );
}

export default App;
