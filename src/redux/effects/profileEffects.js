const selectOnlyReserved = ({ missions, rockets }) => ({
  rockets: rockets.rockets.filter(({ reserved }) => reserved),
  missions: missions.missions.filter(({ reserved }) => reserved),
});

export default selectOnlyReserved;
