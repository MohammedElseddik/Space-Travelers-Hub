export const rocketEffectAfterFetch = ({ data }) => data.map(
  ({
    rocket_id, rocket_name, rocket_type, flickr_images,
  }) => ({
    id: rocket_id,
    name: rocket_name,
    type: rocket_type,
    flickr_images,
  }),
);

export const getState = ({ rockets }) => rockets;
