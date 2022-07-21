export const rocketEffectAfterFetch = ({ payload }) => payload.map(
  (rock) => ({
    id: rock.id,
    name: rock.rocket_name,
    details: rock.description,
    imageUrl: rock.flickr_images[0],
  }),
);

export const selectAllJoinedRockets = ({ rockets }) => ({
  rockets: rockets.rockets.filter(({ reserved }) => reserved),
});

export const getState = ({ rockets }) => rockets;
