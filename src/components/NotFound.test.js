import { screen, render } from '@testing-library/react';
import NotFound from './NotFound';

it('renders successfully', () => {
  render(<NotFound />);
  expect(screen.getByText('Page Not Found')).toBeInTheDocument();
});
