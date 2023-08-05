import { Link } from "react-router-dom"

const NewColleagueButtons = () => {
  return (
    <div className="button-container">
      <Link to="/colleagues">
        <div className="div-wrapper">
          <button className="back-btn">Back</button>
        </div>
      </Link>

      <button type="submit" className="add-btn">
        Add
      </button>
    </div>

  )
}

export default NewColleagueButtons
