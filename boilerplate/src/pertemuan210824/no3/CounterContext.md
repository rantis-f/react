import React, { createContext, useReducer } from 'react';

const increment = 'increment';
const decrement = 'decrement';
const reset = 'reset';

const counterReducer = (state, action) => {
  switch (action.type) {
    case increment:
      return { count: state.count + 1 };
    case decrement:
      return { count: state.count - 1 };
    case reset:
      return { count: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
