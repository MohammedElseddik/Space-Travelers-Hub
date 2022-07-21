import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/store';

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default (Component) => render(
  Component,
  { wrapper: ReduxWrapper },
);

export {
  store,
  ReduxWrapper,
};
