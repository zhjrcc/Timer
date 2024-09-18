import TimeDisplay from "./TimeDisplay"
import Button from "./Button"
import { useEffect, useState } from "react"

function Timer({ startTime, onComplete }) {
  const [remaining, setRemaining] = useState(startTime)
  const [isRunning, setRunning] = useState(false)

  // 倒计时逻辑，依赖于 isRunning 状态
  useEffect(() => {
    if (!isRunning) return

    function tick() {
      setRemaining((prevState) => Math.max(prevState - 1, 0)) // 确保倒计时不会低于 0
    }

    const interval = setInterval(tick, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  // 当 remaining 变为 0 时，调用 onComplete
  useEffect(() => {
    if (remaining === 0) {
      onComplete() // 此时调用父组件传入的回调函数
    }
  }, [remaining, onComplete])

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
