import { Link, useParams } from 'react-router-dom'
import EditIcon from '../components/assets/EditIcon'
import DeleteIcon from '../components/assets/DeleteIcon'
import FullName from '../components/colleagues/profile/FullName'

const ColleagueProfilePage = ({ colleagues }) => {
  const { id } = useParams()
  const colleague = colleagues.find(colleague => colleague?.id === Number(id))

  return (
    <div className="colleague-profile">
      <h2>Colleague profile</h2>

      <div className="frame-2">

        <FullName colleague={colleague} />

        <div className="frame-3">
          <p className="text-wrapper-6">Date and place of birth:</p>
          <p className="text-wrapper-7">{colleague?.birthday}, {colleague?.birthPlace}</p>
          <EditIcon className="edit" alt="edit sign" />
          <DeleteIcon className="delete" alt="delete sign" />
        </div>

        <div className="frame-3">
          <div className="text-wrapper-6">Mother's maiden name:</div>
          <div className="text-wrapper-7">{colleague?.motherName}</div>
          <EditIcon className="edit" alt="edit sign" />
          <DeleteIcon className="delete" alt="delete sign" />
        </div>

        <div className="frame-3">
          <div className="text-wrapper-6">Social Security Number:</div>
          <div className="text-wrapper-7">{colleague?.socSecNumber}</div>
          <EditIcon className="edit" alt="edit sign" />
          <DeleteIcon className="delete" alt="delete sign" />
        </div>

        <div className="frame-3">
          <div className="text-wrapper-6">Tax Identification Number:</div>
          <div className="text-wrapper-7">{colleague?.tax}</div>
          <EditIcon className="edit" alt="edit sign" />
          <DeleteIcon className="delete" alt="delete sign" />
        </div>

        <div className="frame-3">
          <div className="text-wrapper-6">Email address:</div>
          <div className="text-wrapper-7">{colleague?.email}</div>
          <EditIcon className="edit" alt="edit sign" />
          <DeleteIcon className="delete" alt="delete sign" />
        </div>

        <div className="frame-3">
          <div className="text-wrapper-6">Addresses:</div>
          <p className="text-wrapper-7">
            12345, Springfield, Main Street 123, Apt. 4B
            <br />
            12345, Springfield, Main Street 123, Apt. 5B
          </p>
          <EditIcon className="edit" alt="edit sign" />
          <DeleteIcon className="delete" alt="delete sign" />
        </div>

        <div className="frame-3">
          <div className="text-wrapper-6">Phone numbers:</div>
          <div className="text-wrapper-7">
            06701234514
            <br />
            06701234519
            <br />
            06701234511
          </div>
          <EditIcon className="edit" alt="edit sign" />
          <DeleteIcon className="delete" alt="delete sign" />
        </div>

        <div className="frame-3">
          <div className="text-wrapper-6">Divisions:</div>
          <div className="text-wrapper-7">{colleague?.division}</div>
          <EditIcon className="edit" alt="edit sign" />
          <DeleteIcon className="delete" alt="delete sign" />
        </div>
      </div>

      <div className="frame-5">
        <div className="overlap-group-wrapper">



          <Link to="/colleagues">
            <div className="div-wrapper">
              <button className="text-wrapper-9">Back</button>
            </div>
          </Link>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-3">
            <button className="text-wrapper-10">Delete</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ColleagueProfilePage
