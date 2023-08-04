import { Link } from "react-router-dom"
import EditIcon from '../assets/EditIcon'

const Colleague = ({ colleague }) => {

  return (
    <div className={`data-container ${colleague?.phoneNumber?.length === 0 ? "no-phone-number" : ''}`}>
      <p className="name middle-text">{colleague?.name}</p>
      <p className="data long-text">{colleague?.email}</p>
      <p className="data long-text">
        {colleague?.phoneNumber?.length > 0
          ? colleague?.phoneNumber?.slice(0, 2).join(', ')
          : 'No phone number'}
      </p>

      <Link to={`/colleagues/${colleague?.id}`}>
        <EditIcon alt="edit sign" />
      </Link>
    </div >
  )
}

export default Colleague
