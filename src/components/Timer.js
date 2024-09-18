import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { dispatch, secondRemain } = useQuiz();
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
