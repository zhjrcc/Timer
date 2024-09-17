function Button({ icon, label, onClick }) {
  return (
    <button className="toggle" title={label} onClick={onClick}>
      <img src={`icons/${icon}.svg`} alt="Play" />
    </button>
  )
}

export default Button
