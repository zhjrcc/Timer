import { useEffect, useState } from "react"
import TimerDisplay from "./TimerDisplay"
import Button from "./Button"

function Timer({ startTime }) {
  const [isRunning, setRunning] = useState(false)
  const [remaining, setRemaining] = useState(startTime)

  useEffect(() => {
    if (!isRunning) {
      return
    }
    // tick每过一秒就执行一次setRemaining
    function tick() {
      setRemaining((prevState) => {
        const value = prevState - 1
        // 小于或等于0就表示已经倒计完了，返回倒计时数
        if (value <= 0) {
          setRunning(false)
          return startTime
        }
        // 否则就返回一个减掉1秒后的值
        return value
      })
    }
    const interval = setInterval(tick, 1000)
    // 当依赖数组发生变化或者组件卸载时会先执行清理函数
    return () => clearInterval(interval)
  }, [isRunning, startTime])

  const play = () => setRunning(true)
  const pause = () => setRunning(false)
  return (
    <section className={`timer ${isRunning} ? "timer-ticking" : "" `}>
      <TimerDisplay time={remaining} />
      {isRunning ? (
        <Button icon="pause" label="Pause" onClick={pause} />
      ) : (
        <Button icon="play" label="play" onClick={play} />
      )}
    </section>
  )
}

export default Timer
