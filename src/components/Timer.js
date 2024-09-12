import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";

function Timer({ dispatch, secondRemain }) {
  const min = Math.floor(secondRemain / 60);
  const sec = secondRemain - min * 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}

export default Timer;
