import React from 'react';
import '@testing-library/react/pure'; //cleanup tp run and the afterEach
import '@testing-library/jest-dom';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../modules';

function render(ui, { initialState, ...renderOptions }) {
  const store = createStore(rootReducer, initialState);
  const CustomWrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: CustomWrapper, ...renderOptions });
}

//re-export
export * from '@testing-library/react';
//override render method
export { render };
