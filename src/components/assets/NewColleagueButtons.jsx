import { Link } from "react-router-dom"

const NewColleagueButtons = ({ handleFormSubmit }) => {
  return (
    <div className="button-container">
      <Link to="/colleagues">
        <div className="div-wrapper">
          <button className="back-btn">Back</button>
        </div>
      </Link>

      <button className="add-btn" onClick={handleFormSubmit}>
        Add
      </button>
    </div>
  )
}

export default NewColleagueButtons
