import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

test('renders successfully', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(screen.getAllByRole('link')).toHaveLength(4);
  expect(screen.getByText(/My Profile/)).toBeInTheDocument();
  expect(screen.getByText(/Rockets/)).toBeInTheDocument();
  expect(screen.getByText(/Missions/)).toBeInTheDocument();
  expect(screen.getByText(/Space Travelers/)).toBeInTheDocument();
});
