import React, { useState, useEffect } from "react"
import "./style/css/style.css"
import BrowserRoutes from './components/routes/BrowserRoutes'

function App() {
  const [colleagues, setColleagues] = useState([])

  useEffect(() => {
    fetch('/dummyColleguesData.json')
      .then(res => res.json())
      .then(data => setColleagues(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <BrowserRoutes colleagues={colleagues} />
  )
}

export default App
