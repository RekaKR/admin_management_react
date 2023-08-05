const InputField = ({ label, placeholder, name, value, onChange, formErrors }) => {
  return (
    <div className="inp-container">
      <p>{label}</p>
      <input type="text" placeholder={placeholder} name={name} value={value} onChange={onChange} required />

      {formErrors[name] && <span>{formErrors[name]}</span>}
    </div>
  )
}

export default InputField
