import { useState } from "react"
import Timer from "./Timer"
import AddTimer from "./AddTimer"

function TimerManager() {
  const [timers, setTimers] = useState([{ id: "first", startTime: 1 }])
  const [isAdding, setAdding] = useState(false)

  const onAdd = (startTime) => {
    const id = `timer-${Math.random()}`
    setTimers((prevState) => [...prevState, { id, startTime }])
    setAdding(false)
  }

  const onDelete = (idToDelete) => {
    setTimers((prevState) => prevState.filter(({ id }) => id !== idToDelete))
  }

  return (
    <div className="timers">
      {timers.map(({ id, startTime }) => (
        <Timer startTime={startTime} key={id} id={id} onDelete={onDelete} />
      ))}
      {isAdding ? (
        <AddTimer onAdd={onAdd} />
      ) : (
        <button className="timer timer-add" onClick={() => setAdding(true)}>
          +
        </button>
      )}
    </div>
  )
}

export default TimerManager
