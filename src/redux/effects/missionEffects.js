export const missionEffectAfterFetch = ({ payload }) => payload.map(
  (mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }),
);

export const reservationEffect = ({ missions }, { payload }) => missions.map(
  (mission) => (
    mission.mission_id !== payload
      ? mission
      : { ...mission, reserved: !mission.reserved }
  ),
);

export const selectAllJoined = ({ missions }) => ({
  missions: missions.missions.filter(({ reserved }) => reserved),
});
