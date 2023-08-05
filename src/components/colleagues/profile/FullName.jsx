import { useState, useEffect } from 'react'
import EditIcon from '../../assets/EditIcon'
import DeleteIcon from '../../assets/DeleteIcon'

const FullName = ({ colleague }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState('')

  useEffect(() => {
    setEditedName(colleague?.name || '')
  }, [colleague])

  const toggleEditing = () => {
    setIsEditing((prevEditing) => !prevEditing)
  }

  const handleNameChange = (e) => {
    setEditedName(e.target.value)
  }

  const handleNameSave = () => {
    setEditedName(editedName)
    setIsEditing(false)

    const alertDiv = document.createElement('div')
    alertDiv.className = 'alert-message'
    alertDiv.style.backgroundColor = '#4caf50'
    alertDiv.textContent = 'Changes saved!'

    document.body.appendChild(alertDiv)

    setTimeout(() => {
      alertDiv.remove()
    }, 3000)
  }

  function handleDelete() {
    setEditedName('')

    const alertDiv = document.createElement('div')
    alertDiv.className = 'alert-message'
    alertDiv.style.backgroundColor = '#4caf50'
    alertDiv.textContent = 'Deleted!'

    document.body.appendChild(alertDiv)

    setTimeout(() => {
      alertDiv.remove()
    }, 3000)
  }

  return (
    <div className="frame-3">
      <div className="text-wrapper-6">Full name:</div>
      {
        isEditing
          ? <>
            <textarea className="text-wrapper-7" value={editedName} onChange={handleNameChange} />
            <button onClick={handleNameSave}>
              Save
            </button>
          </>
          : <>
            <p className="text-wrapper-7">{editedName}</p>
            <button onClick={toggleEditing}>
              <EditIcon className="edit" alt="edit sign" />
            </button>
          </>
      }

      <button onClick={handleDelete}>
        <DeleteIcon className="delete" alt="delete sign" />
      </button>
    </div>
  )
}

export default FullName
