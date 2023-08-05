
const FormPhone = ({ phoneFields, handlePhoneNumberChange, handleAddPhoneField, handleAddPhoneNumber }) => {
  return (
    <div className="doubble-container">
      {phoneFields.map((phone, index) => (
        <div className="frame-5 phone" key={phone.id}>
          <p>Phone number *</p>
          <input type="text" placeholder="Phone number *" value={phone.number}
            onChange={(e) => handlePhoneNumberChange(index, e.target.value)} />
        </div>
      ))}

      <button onClick={() => { handleAddPhoneField(); handleAddPhoneNumber() }}>
        <img className='img' alt="plus sign" src="/assets/plus.svg" />
      </button>
    </div>
  )
}

export default FormPhone
