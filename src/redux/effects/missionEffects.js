const missionEffectAfterFetch = ({ payload }) => {
  payload.map(({ mission_name, mission_id, mission_description }) => {
    return {
      mission_id,
      mission_name,
      mission_description,
    };
  });
};

export default missionEffectAfterFetch;
