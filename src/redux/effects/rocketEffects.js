export const rocketEffectAfterFetch = ({ data }) => data.map(
  ({
    id, rocket_name, description, flickr_images,
  }) => ({
    id,
    name: rocket_name,
    description,
    flickr_images,
  }),
);

export const getState = ({ rockets }) => rockets;
