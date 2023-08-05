const FormAddress = ({ adressFields, handleAddressChange, handleAddAddressField, handleAddAddress }) => {
  return (
    <div className="doubble-container">
      {adressFields.map((address, index) => (
        <div className="frame-10" key={address.id}>
          <div className="frame-6">
            <div className="inp-container">
              <p>Country *</p>
              <input type="text" placeholder="Country *" value={address.country}
                onChange={(e) => handleAddressChange(index, "country", e.target.value)} required />
            </div>
          </div>

          <div className="frame-6">
            <div className="inp-container">
              <div className="text-wrapper-9">Postal code *</div>
              <input className="short-inp" type="number" placeholder="Postal code *" value={address.postalCode} onChange={(e) => handleAddressChange(index, "postalCode", e.target.value)} required />
            </div>

            <div className="inp-container">
              <p>City *</p>
              <input className="long-inp" type="text" placeholder="City *" value={address.city} onChange={(e) => handleAddressChange(index, "city", e.target.value)} required />
            </div>
          </div>

          <div className="frame-6">
            <div className="inp-container">
              <p>Street *</p>
              <input className="long-inp" type="text" placeholder="Street *" value={address.street} onChange={(e) => handleAddressChange(index, "street", e.target.value)} required />
            </div>

            <div className="inp-container">
              <div className="text-wrapper-9">House number *</div>
              <input className="short-inp" type="number" placeholder="House number *" value={address.houseNumber} onChange={(e) => handleAddressChange(index, "houseNumber", e.target.value)} required />
            </div>
          </div>

          <div className="frame-5 other">
            <p>Other</p>
            <input type="text" placeholder="Other" value={address.other} onChange={(e) => handleAddressChange(index, "other", e.target.value)} />
          </div>
        </div>
      ))}

      <button className="blf" onClick={() => { handleAddAddressField(); handleAddAddress() }}>
        <img className='img' alt="plus sign" src="/assets/plus.svg" />
      </button>
    </div>
  )
}

export default FormAddress
