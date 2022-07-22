import { screen, waitFor, act } from '@testing-library/react';
import render, { store } from '../utils/redux-test-utils';
import RocketItem from './RocketItem';
import { fetchRockets } from '../redux/features/rocketSlice';

const props = {
  id: 1,
  name: 'Falcon 1',
  details: 'Rocket specs',
  imageUrl: '',
};

describe('RocketItem', () => {
  it('renders successfully', () => {
    render(<RocketItem rocket={props} />);
    const element = screen.getByText(props.name);
    expect(element).toBeInTheDocument();
    const reserveBtn = screen.getByText('Reserve Rocket');
    expect(reserveBtn).toBeInTheDocument();
  });

  it('triggers rocket reservation', () => {
    render(<RocketItem rocket={props} />);
    const action = {
      type: fetchRockets.fulfilled.type,
      payload: [{
        id: 1,
        rocket_name: 'Falcon 1',
        description: 'Rocket specs',
        flickr_images: [''],
      }],
    };
    act(() => {
      store.dispatch(action);
    });
    screen.getByText('Reserve Rocket').click();
    waitFor(() => {
      const { rockets } = store.getState();
      expect(rockets[0]).toEqual({
        ...props,
        reserved: true,
      });
    });
  });

  it('triggers rocket cancelation', () => {
    render(<RocketItem rocket={{ ...props, reserved: true }} />);
    const action = {
      type: fetchRockets.fulfilled.type,
      payload: [{
        id: 1,
        rocket_name: 'Falcon 1',
        description: 'Rocket specs',
        flickr_images: [''],
      }],
    };
    act(() => {
      store.dispatch(action);
    });
    screen.getByText('Cancel Reservation').click();
    waitFor(() => {
      const { rockets } = store.getState();
      expect(rockets[0]).toEqual(props);
    });
  });
});
