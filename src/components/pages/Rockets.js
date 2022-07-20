import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RocketItem from "../rocketItem";
import { fetchRockets } from "../../redux/features/rocketSlice";
import { getState } from "../../redux/effects/rocketEffects";

const Rockets = () => {
  const { error, rockets, status } = useSelector(getState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRockets());
    }
  }, []);

  const isWait = ["idle", "loading"].includes(status);

  return (
    <div>
      {isWait && <p>Loading..</p>}
      {error && <p>{error}</p>}
      {rockets.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;
