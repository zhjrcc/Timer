import TimeDisplay from "./TimeDisplay"
import Button from "./Button"
import { useEffect, useState } from "react"
// 
function Timer({ startTime, onComplete }) {
  const [remaining, setRemaining] = useState(startTime)
  const [isRunning, setRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) {
      return
    }
    function tick() {
      setRemaining((prevState) => {
        const value = prevState - 1
        if (value <= 0) {
          onComplete()
          return 0
        }
        return value
      })
    }
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [isRunning, onComplete])

  return (
    <section className={`timer ${isRunning ? "timer-ticking" : ""} `}>
      <TimeDisplay time={remaining} />
      {isRunning ? (
        <Button icon="pause" label="Pause" onClick={() => setRunning(false)} />
      ) : (
        <Button icon="play" label="play" onClick={() => setRunning(true)} />
      )}
      <Button icon="trash" label="Delete" onClick={onComplete} />
    </section>
  )
}

export default Timer
