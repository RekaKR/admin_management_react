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
        <div className="text-wrapper-11">Colleagues</div>

        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper-12">Name</div>
            <div className="text-wrapper-13">Email</div>
            <div className="text-wrapper-13">Phone number</div>
            <div className="text-wrapper-14">Edit</div>
          </div>

          <div className="frame-5">
            <div className="frame-6">
              <div className="text-wrapper-15">Alex Johnson</div>
              <div className="text-wrapper-16">alex.johnson@dpd.com</div>
              <div className="text-wrapper-16">06701234560, 06701234567</div>
              <img className="edit" alt="edit sign" src="../../assets/edit.png" />
            </div>
            {/*
                <div className="frame-6">
                  <div className="text-wrapper-15">Jane Smith</div>
                  <div className="text-wrapper-16">jane.smith@dpd.com</div>
                  <div className="text-wrapper-16">06701234561</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-15">Emily Brown</div>
                  <div className="text-wrapper-16">emily.brown@dpd.com</div>
                  <div className="text-wrapper-16">06701234562, 06701234568</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-17">Michael Williams</div>
                  <div className="text-wrapper-18">michael.williams@dpd.com</div>
                  <div className="text-wrapper-16">06</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-15">Sophia Martinez</div>
                  <div className="text-wrapper-16">sophia.martinez@dpd.com</div>
                  <div className="text-wrapper-16">06701234564, 06701234569</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-17">William Wilson</div>
                  <div className="text-wrapper-18">william.wilson@dpd.com</div>
                  <div className="text-wrapper-16">06</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-15">James Anderson</div>
                  <div className="text-wrapper-16">james.anderson@dpd.com</div>
                  <div className="text-wrapper-16">06701234565</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-15">Emma Taylor</div>
                  <div className="text-wrapper-16">emma.taylor@dpd.com</div>
                  <div className="text-wrapper-16">06701234566</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-17">Emma Wilson</div>
                  <div className="text-wrapper-18">emma.wilson@dpd.com</div>
                  <div className="text-wrapper-16">06</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-15">Olivia Davis</div>
                  <div className="text-wrapper-16">olivia.davis@dpd.com</div>
                  <div className="text-wrapper-16">06701234563</div>
                  <img className="edit" alt="edit sign" src="../../assets/edit.png" />
                </div>
                */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ColleaguesPage
