import { Link } from "react-router-dom"

const SearchBarField = () => {
  return (
    <div className="search-bar-field">
      <div className="search-container">
        <input type="search" id="colleague-search" placeholder='search' />
        <button />
      </div>

      <Link to="new">
        <button className="add-new-wrapper">
          <p>Add new</p>
        </button>
      </Link>
    </div>
  )
}

export default SearchBarField
