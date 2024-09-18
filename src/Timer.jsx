import TimeDisplay from "./TimeDisplay"
import Button from "./Button"
import useTimer from "./useTimer"

function Timer({ startTime, id, onDelete }) {
  const {
    state: { remaining, isRunning, isCompleted },
    dispatch,
  } = useTimer(startTime)

  const timerClass = [
    "timer",
    isCompleted ? "timer-ringing" : "",
    isRunning ? "timer-ticking" : "",
  ].join(" ")
  return (
    <section className={timerClass}>
      <TimeDisplay time={remaining} />
      {isRunning ? (
        <Button
          icon="pause"
          label="Pause"
          onClick={() => dispatch({ type: "PAUSE" })}
        />
      ) : (
        <Button
          icon="play"
          label="play"
          onClick={() => dispatch({ type: "PLAY" })}
          disabled={isCompleted}
        />
      )}
      <Button
        icon="restart"
        label="Restart"
        onClick={() => dispatch({ type: "RESTART" })}
      />
      <Button icon="trash" label="Delete" onClick={() => onDelete(id)} />
    </section>
  )
}

export default Timer
