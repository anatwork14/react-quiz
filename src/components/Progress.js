import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestion, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <div>
      <header className="progress">
        <progress max={numQuestion} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestion}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
