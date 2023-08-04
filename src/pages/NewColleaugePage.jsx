import { useState } from "react"
import NewColleagueButtons from "../components/assets/NewColleagueButtons";
import NewColleagueForm from "../components/colleagues/NewColleagueForm";

const NewColleauge = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([{ number: '' }]);

  const [addresses, setAddresses] = useState([{
    country: '',
    postalCode: '',
    city: '',
    street: '',
    houseNumber: '',
    other: ''
  }])

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    birthPlace: "",
    motherName: "",
    socSecNumber: "",
    tax: "",
    email: "",
    phoneNumber: phoneNumbers.map(phone => ({ number: phone.number })),
    address: addresses,
    division: ""
  })

  const handlePhoneNumberChange = (i, value) => {
    const newPhoneNumbers = [...phoneNumbers]
    newPhoneNumbers[i].number = value
    setPhoneNumbers(newPhoneNumbers)
  }


  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFormSubmit = () => {
    fetch('/dummyColleguesData.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": `${formData.firstName} ${formData.lastName}`,
        "email": formData.email,
        "phoneNumber": formData.phoneNumber,
        "birthday": formData.birthday,
        "birthPlace": formData.birthPlace,
        "motherName": formData.motherName,
        "socSecNumber": formData.socSecNumber,
        "tax": formData.tax,
        "addresses": formData.address,
        "division": formData.division
      }),
    })
      .then(res => res.json())
      .then(data => console.log("Success:", data))
      .catch(err => console.error("Error:", err))
  }

  return (
    <div className="new-colleague-field">
      <div className="container">
        <h2>New Colleague</h2>
        <NewColleagueForm />
        <NewColleagueButtons handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  )
}

export default NewColleauge
