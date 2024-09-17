function Input({ name, value, ...rest }) {
  return (
    <li className="part">
      <input
        type="number"
        className="number"
        value={String(value).padStart(2, "0")}
        id={name}
        name={name}
        {...rest}
      />
      <label htmlFor={name} className="unit">
        {name}
      </label>
    </li>
  )
}
export default Input
