import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NewColleagueButtons from "../components/assets/NewColleagueButtons"
import NewColleagueForm from "../components/colleagues/NewColleagueForm"

const NewColleaugePage = () => {
  const navigate = useNavigate()
  const [formErrors, setFormErrors] = useState({})
  const [phoneNumbers, setPhoneNumbers] = useState([{ number: "" }])
  const [addresses, setAddresses] = useState([
    {
      country: "",
      postalCode: "",
      city: "",
      street: "",
      houseNumber: "",
      other: ""
    }
  ])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    birthPlace: "",
    motherName: "",
    socSecNumber: "",
    tax: "",
    email: "",
    phoneNumber: phoneNumbers,
    address: addresses,
    division: ""
  })

  const handlePhoneNumberChange = (i, value) => {
    const newPhoneNumbers = phoneNumbers.map((phone, index) =>
      index === i ? { ...phone, number: value } : phone
    )

    setPhoneNumbers(newPhoneNumbers)
  }

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, { number: "" }])
  }

  const handleAddressChange = (i, field, value) => {
    const newAddresses = addresses.map((address, index) =>
      index === i ? { ...address, [field]: value } : address
    )

    setAddresses(newAddresses)
  }

  const handleAddAddress = () => {
    setAddresses([
      ...addresses,
      {
        country: "",
        postalCode: "",
        city: "",
        street: "",
        houseNumber: "",
        other: ""
      }
    ])
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    // Email validation
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      setFormErrors(prevErrors => ({
        ...prevErrors,
        email: emailRegex.test(value) ? '' : 'Invalid email format'
      }))
    } else {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: value.trim() ? '' : 'Pls fill out the field'
      }))
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  /*
  const handleClearForm = () => {
    setFormData(initialFormState)
    setPhoneNumbers([{ number: "" }])
    setAddresses([
      {
        country: "",
        postalCode: "",
        city: "",
        street: "",
        houseNumber: "",
        other: ""
      }
    ])
  }
  */

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const postData = {
      ...formData,
      phoneNumber: phoneNumbers,
      address: addresses,
    }

    console.log(postData)

    /*
   fetch('/api/dummyAPI', {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(postData),
   })
     .then(res => res.json())
     .then(data => navigate("/colleagues"))
     .catch(err => console.error("Error:", err))
     */

    navigate("/colleagues")
  }

  return (
    <form className="new-colleague-field" onSubmit={handleFormSubmit}>
      <div className="container">
        <h2>New Colleague</h2>

        <NewColleagueForm
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleAddPhoneNumber={handleAddPhoneNumber}
          handleAddressChange={handleAddressChange}
          handleAddAddress={handleAddAddress}
          formData={formData}
          handleInputChange={handleInputChange}
          formErrors={formErrors} />
        <NewColleagueButtons />
      </div>
    </form>
  )
}

export default NewColleaugePage
