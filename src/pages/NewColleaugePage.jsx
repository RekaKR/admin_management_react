import { Link } from "react-router-dom"

const NewColleauge = () => {
  return (
    <div className="new-colleauge">
      <div className="new-colleague-field">
        <div className="container">
          <h2>New Colleague</h2>

          <div className="frame-2">
            <div className="overlap-group-wrapper">
              <Link to="/colleagues">
                <div className="div-wrapper">
                  <button className="text-wrapper-6">Back</button>
                </div>
              </Link>
            </div>

            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="text-wrapper-7">Add</div>
              </div>
            </div>
          </div>

          <div className="frame-3">
            <div className="frame-4">
              <p>First name *</p>
              <input type="text" placeholder="First name *" />
            </div>

            <div className="frame-4">
              <p>Last name *</p>
              <input type="text" placeholder="Last name *" />
            </div>

            <div className="frame-4">
              <p>Date of birth *</p>
              <input type="text" placeholder="Date of birth *" />
            </div>

            <div className="frame-4">
              <p>Place of birth *</p>
              <input type="text" placeholder="Place of birth *" />
            </div>

            <div className="frame-4">
              <p>Mother's maiden name *</p>
              <input type="text" placeholder="Mother's maiden name *" />
            </div>

            <div className="frame-4">
              <p>Social Security Number *</p>
              <input type="text" placeholder="Social Security Number *" />
            </div>

            <div className="frame-4">
              <p>Tax Identification Number *</p>
              <input type="text" placeholder="Tax Identification Number *" />
            </div>

            <div className="frame-4">
              <p>Email address *</p>
              <input type="text" placeholder="Email address *" />
            </div>

            <div className="group-3">
              <div className="frame-5">
                <p>Phone number *</p>
                <input type="text" placeholder="Phone number *" />
              </div>

              <img className="plus" alt="plus sign" src="./assets/plus.svg" />
            </div>

            <div className="frame-4">
              <p>Country *</p>
              <input type="text" placeholder="Country *" />
            </div>

            <div className="frame-6">
              <div className="frame-4">
                <div className="text-wrapper-9">Postal code *</div>
                <input className="short-inp" type="text" placeholder="Postal code *" />
              </div>
              <div className="frame-4">
                <p>City *</p>
                <input className="long-inp" type="text" placeholder="City *" />
              </div>
            </div>

            <div className="frame-6">
              <div className="frame-4">
                <p>Street *</p>
                <input className="long-inp" type="text" placeholder="Street *" />
              </div>

              <div className="frame-4">
                <div className="text-wrapper-9">House number *</div>
                <input className="short-inp" type="text" placeholder="House number *" />
              </div>
            </div>

            <div className="group-3">
              <div className="frame-5">
                <p>Other</p>
                <input type="text" placeholder="Other" />
              </div>
              <img className="plus" alt="plus sign" src="./assets/plus.svg" />
            </div>

            <div className="frame-4">
              <p>Division *</p>
              <input type="text" placeholder="Division *" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewColleauge
