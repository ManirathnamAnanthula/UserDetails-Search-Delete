import './index.css'

const UserProfile = props => {
  const {userDetails, onDeleteInput} = props
  const {imageUrl, name, uniqueNo, role} = userDetails

  const onDelete = () => {
    onDeleteInput(uniqueNo)
  }

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
          type="button"
        />
      </button>
    </li>
  )
}
export default UserProfile
