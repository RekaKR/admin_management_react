import { useParams } from 'react-router-dom'
import Colleague from '../components/colleagues/Colleague'

const ColleagueProfilePage = ({ colleagues }) => {
  const { id } = useParams()
  const colleague = colleagues.find(colleague => colleague?.id === Number(id))

  return (
    <div className="colleagues-list">
      <h2>{colleague?.name}</h2>

      <div className="frame-3">
        <div className="data-container">
          <Colleague colleague={colleague} />
        </div>
      </div>
    </div>
  )
}

export default ColleagueProfilePage
