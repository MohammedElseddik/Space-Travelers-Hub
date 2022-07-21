import { screen, waitFor } from '@testing-library/react';
import render from '../../utils/redux-test-utils';
import Missions from './Missions';

it('renders successfully', () => {
  render(<Missions />);
  waitFor(() => expect(screen.getByText('Join Mission')).toBeInTheDocument());
});
