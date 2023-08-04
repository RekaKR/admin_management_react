import { useState, useEffect } from 'react'
import SearchBarField from '../components/colleagues/SearchBarField'
import StatisticsField from '../components/colleagues/StatisticsField'

const ColleaguesPage = () => {
  const [collegues, setCollegues] = useState([])

  useEffect(() => {
    fetch('/dummyColleguesData.json')
      .then(res => res.json())
      .then(data => setCollegues(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <SearchBarField />
      <StatisticsField collegues={collegues} />

      <div className="colleagues-list">
        <h2>Colleagues</h2>

        <div className="frame-3">
          <div className="data-container">
            <p className="middle-text">Name</p>
            <p className="long-text">Email</p>
            <p className="long-text">Phone number</p>
            <p className="small-text">Edit</p>
          </div>

          <div className="data-container">
            <div className="name middle-text">Alex Johnson</div>
            <div className="data long-text">alex.johnson@dpd.com</div>
            <div className="data long-text">06701234560, 06701234567</div>
            <img className="edit" alt="edit sign" src="../../assets/edit.png" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ColleaguesPage
