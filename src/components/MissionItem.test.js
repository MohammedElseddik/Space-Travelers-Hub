import { screen, waitFor, act } from '@testing-library/react';
import render, { store } from '../utils/redux-test-utils';
import MissionItem from './MissionItem';
import fetchMissions from '../apis/missionsApi';

const props = {
  mission_id: '1122',
  mission_name: 'First man on the moon',
  description: 'Today marks the first step towards great history',
};

const getElement = (prop = props) => (
  <table>
    <tbody>
      <MissionItem mission={prop} />
    </tbody>
  </table>
);

describe('MissionItem', () => {
  it('renders successfully', () => {
    render(getElement());
    expect(screen.getByText(props.mission_name)).toBeInTheDocument();
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });

  it('triggers mission join', () => {
    render(getElement());
    const action = {
      type: fetchMissions.fulfilled.type,
      payload: [props],
    };
    act(() => {
      store.dispatch(action);
    });
    screen.getByText('Join Mission').click();
    waitFor(() => {
      const { missions } = store.getState();
      expect(missions[0]).toEqual({
        ...props,
        reserved: true,
      });
    });
  });

  it('triggers mission leave', () => {
    render(getElement({ ...props, reserved: true }));
    const action = {
      type: fetchMissions.fulfilled.type,
      payload: [props],
    };
    act(() => {
      store.dispatch(action);
    });
    screen.getByText('Leave Mission').click();
    waitFor(() => {
      const { missions } = store.getState();
      expect(missions[0]).toEqual(props);
    });
  });
});
