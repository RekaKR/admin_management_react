import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import InputField from './InputField'
import FormPhone from './FormPhone'
import FormAddress from './FormAddress'

const NewColleagueForm = ({ handlePhoneNumberChange, handleAddPhoneNumber, handleAddressChange, handleAddAddress, formData, handleInputChange, formErrors }) => {
  const [phoneFields, setPhoneFields] = useState([{ id: uuidv4() }])
  const [adressFields, setAddressFields] = useState([{ id: uuidv4() }])

  const handleAddPhoneField = () => {
    setPhoneFields([...phoneFields, { id: uuidv4() }])
  }

  const handleAddAddressField = () => {
    setAddressFields([...adressFields, { id: uuidv4() }])
  }

  return (
    <div className="frame-3" >
      <InputField label="First name *" placeholder="First name *" name="firstName" value={formData.firstName} onChange={handleInputChange} formErrors={formErrors} />
      <InputField label="Last name *" placeholder="Last name *" name="lastName" value={formData.lastName} onChange={handleInputChange} formErrors={formErrors} />
      <InputField label="Date of birth *" placeholder="Date of birth *" name="birthday" value={formData.birthday} onChange={handleInputChange} formErrors={formErrors} />
      <InputField label="Place of birth *" placeholder="Place of birth *" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} formErrors={formErrors} />
      <InputField label="Mother's maiden name *" placeholder="Mother's maiden name *" name="motherName" value={formData.motherName} onChange={handleInputChange} formErrors={formErrors} />
      <InputField label="Social Security Number *" placeholder="Social Security Number *" name="socSecNumber" value={formData.socSecNumber} onChange={handleInputChange} formErrors={formErrors} />
      <InputField label="Tax Identification Number *" placeholder="Tax Identification Number *" name="tax" value={formData.tax} onChange={handleInputChange} formErrors={formErrors} />
      <InputField label="Email address *" placeholder="Email address *" name="email" value={formData.email} onChange={handleInputChange} formErrors={formErrors} />

      <div className="frame-6 division">
        <InputField label="Division *" placeholder="Division *" name="division" value={formData.division} onChange={handleInputChange} formErrors={formErrors} />
      </div>

      <FormPhone
        phoneFields={phoneFields}
        handlePhoneNumberChange={handlePhoneNumberChange}
        handleAddPhoneField={handleAddPhoneField}
        handleAddPhoneNumber={handleAddPhoneNumber}
      />

      <FormAddress
        adressFields={adressFields}
        handleAddressChange={handleAddressChange}
        handleAddAddressField={handleAddAddressField}
        handleAddAddress={handleAddAddress}
      />
    </div>
  )
}

export default NewColleagueForm
