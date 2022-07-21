export const rocketEffectAfterFetch = ({ data }) => data.map(({
  id, rocket_name, description, flickr_images,
}) => ({
  id,
  name: rocket_name,
  description,
  flickr_images,
}));

export const selectAllJoinedRockets = ({ rockets }) => ({
  rockets: rockets.rockets.filter(({ reserved }) => reserved),
});

export const getState = ({ rockets }) => rockets;
