import { screen, waitFor } from '@testing-library/react';
import render from '../../utils/redux-test-utils';
import Rockets from './Rockets';

it('renders successfully', () => {
  render(<Rockets />);
  waitFor(() => expect(screen.getByText('Reserve Rocket')).toBeInTheDocument());
});
