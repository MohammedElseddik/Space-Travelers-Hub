export const missionEffectAfterFetch = ({ payload }) => payload.map(
  (mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }),
);

export const selectAllJoined = ({ missions }) => ({
  missions: missions.missions.filter(({ reserved }) => reserved),
});
