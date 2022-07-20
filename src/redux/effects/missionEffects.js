export const missionEffectAfterFetch = ({ payload }) => {
  console.log(payload);
  payload.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
  }));
};
export default missionEffectAfterFetch;
