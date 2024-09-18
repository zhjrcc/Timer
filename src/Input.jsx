function Input({ name, value, ...rest }) {
  return (
    <li className="part">
      <input
        type="number"
        className="number"
        name={name}
        id={name}
        value={String(value).padStart(2, "0")}
        {...rest}
      />
      <label htmlFor={name} className="unit">
        {name}
      </label>
    </li>
  )
}

export default Input
