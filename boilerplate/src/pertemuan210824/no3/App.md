import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemedComponent from './ThemedComponent';
import CounterComponent from './CounterComponent';
import { CounterProvider } from './CounterContext';

function App() {

  return (
      <CounterProvider>
        <CounterComponent />
      </CounterProvider>
  );
}

export default App;