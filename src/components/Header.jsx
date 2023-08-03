const Header = () => {

  const dummyName = "Réka"

  return (
    <header>
      <div className="group">
        <img className="profile-img" alt="Profile img" src="./assets/profile_img.jpg" />
        <p>Hi, {dummyName}</p>
      </div>
    </header>
  )
}

export default Header
