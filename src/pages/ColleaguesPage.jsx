import { v4 as uuidv4 } from 'uuid'
import SearchBarField from '../components/colleagues/SearchBarField'
import StatisticsField from '../components/colleagues/StatisticsField'
import Colleague from '../components/colleagues/Colleague'

const ColleaguesPage = ({ colleagues }) => {
  return (
    <>
      <SearchBarField />
      <StatisticsField collegues={colleagues} />

      <div className="colleagues-list">
        <h2>Colleagues</h2>

        <div className="frame-3">
          <div className="data-container">
            <p className="middle-text">Name</p>
            <p className="long-text">Email</p>
            <p className="long-text">Phone number</p>
            <p className="small-text">Edit</p>
          </div>

          {
            colleagues.map(colleague => <Colleague key={uuidv4()} colleague={colleague} />)
          }
        </div>
      </div>
    </>
  )
}

export default ColleaguesPage
