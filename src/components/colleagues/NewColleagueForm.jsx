import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const NewColleagueForm = () => {
  const [phoneFields, setPhoneFields] = useState([{ id: uuidv4() }])
  const [adressFields, setAddressFields] = useState([{ id: uuidv4() }])

  const handleAddPhoneField = () => {
    setPhoneFields([...phoneFields, { id: uuidv4() }])
  }

  const handleAddAddressField = () => {
    setAddressFields([...adressFields, { id: uuidv4() }])
  }

  return (
    <div className="frame-3">
      <div className="inp-container">
        <p>First name *</p>
        <input type="text" placeholder="First name *" />
      </div>

      <div className="inp-container">
        <p>Last name *</p>
        <input type="text" placeholder="Last name *" />
      </div>

      <div className="inp-container">
        <p>Date of birth *</p>
        <input type="text" placeholder="Date of birth *" />
      </div>

      <div className="inp-container">
        <p>Place of birth *</p>
        <input type="text" placeholder="Place of birth *" />
      </div>

      <div className="inp-container">
        <p>Mother's maiden name *</p>
        <input type="text" placeholder="Mother's maiden name *" />
      </div>

      <div className="inp-container">
        <p>Social Security Number *</p>
        <input type="text" placeholder="Social Security Number *" />
      </div>

      <div className="inp-container">
        <p>Tax Identification Number *</p>
        <input type="text" placeholder="Tax Identification Number *" />
      </div>

      <div className="inp-container">
        <p>Email address *</p>
        <input type="text" placeholder="Email address *" />
      </div>

      <div className="frame-6 division">
        <div className="inp-container">
          <p>Division *</p>
          <input type="text" placeholder="Division *" />
        </div>
      </div>

      <div className="doubble-container">
        {phoneFields.map(field => (
          <div className="frame-5 phone" key={field.id}>
            <p>Phone number *</p>
            <input type="text" placeholder="Phone number *" />
          </div>
        ))}

        <button onClick={handleAddPhoneField}>
          <img alt="plus sign" src="/assets/plus.svg" />
        </button>
      </div>

      <div className="doubble-container">
        {adressFields.map(field => (
          <div className="frame-10" key={field.id}>
            <div className="frame-6">
              <div className="inp-container">
                <p>Country *</p>
                <input type="text" placeholder="Country *" />
              </div>
            </div>

            <div className="frame-6">
              <div className="inp-container">
                <div className="text-wrapper-9">Postal code *</div>
                <input className="short-inp" type="text" placeholder="Postal code *" />
              </div>

              <div className="inp-container">
                <p>City *</p>
                <input className="long-inp" type="text" placeholder="City *" />
              </div>
            </div>

            <div className="frame-6">
              <div className="inp-container">
                <p>Street *</p>
                <input className="long-inp" type="text" placeholder="Street *" />
              </div>

              <div className="inp-container">
                <div className="text-wrapper-9">House number *</div>
                <input className="short-inp" type="text" placeholder="House number *" />
              </div>
            </div>

            <div className="frame-5 other">
              <p>Other</p>
              <input type="text" placeholder="Other" />
            </div>
          </div>
        ))}

        <button className="blf" onClick={handleAddAddressField}>
          <img alt="plus sign" src="/assets/plus.svg" />
        </button>
      </div>
    </div>
  )
}

export default NewColleagueForm
