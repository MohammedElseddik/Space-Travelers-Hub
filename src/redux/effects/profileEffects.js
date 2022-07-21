export default selectOnlyReserved = ({ missions, rockets }) => ({
  rockets: rockets.rockets.filter(({ reserved }) => reserved),
  missions: missions.missions.filter(({ reserved }) => reserved),
});
