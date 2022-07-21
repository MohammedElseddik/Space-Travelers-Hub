import { screen } from '@testing-library/react';
import render from './utils/redux-test-utils';
import App from './App';

test('renders App links', () => {
  render(<App />);
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(4);
});
