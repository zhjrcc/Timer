function Button({ icon, label, ...rest }) {
  return (
    <button className="toggle" title={label} {...rest}>
      <img src={`icons/${icon}.svg`} alt={label} />
    </button>
  )
}

export default Button
