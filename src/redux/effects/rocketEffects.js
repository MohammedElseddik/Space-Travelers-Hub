export const rocketEffectAfterFetch = ({ payload }) => payload.map(
  (rock) => ({
    id: rock.id,
    name: rock.rocket_name,
    details: rock.description,
    imageUrl: rock.flickr_images[0],
  }),
);

export const reservationEffect = ({ rockets }, { payload }) => rockets.map(
  (rocket) => (
    rocket.id !== payload
      ? rocket
      : { ...rocket, reserved: !rocket.reserved }
  ),
);

export const getState = ({ rockets }) => rockets;
