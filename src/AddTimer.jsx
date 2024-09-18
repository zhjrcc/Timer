import { useState } from "react"
import Input from "./Input"
import Button from "./Button"

const EMPTY = { minutes: 0, seconds: 0 }

function AddTimer({ onAdd }) {
  const [data, setData] = useState(EMPTY)
  const onChange = (evt) => {
    setData((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.valueAsNumber,
    }))
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    onAdd(data.minutes * 60 + data.seconds)
    setData(EMPTY)
  }
  return (
    <form onSubmit={onSubmit} className="timer timer-new">
      <ul className="parts">
        <Input name="minutes" value={data.minutes} onChange={onChange} />
        <li className="colon">:</li>
        <Input name="seconds" value={data.seconds} onChange={onChange} />
      </ul>
      <Button icon="play" label="Start" />
    </form>
  )
}
export default AddTimer
