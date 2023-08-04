const Header = () => {
  const dummyName = "Réka"
  const dummyProfileImage = "./assets/profile_img.jpg"

  return (
    <header>
      <div>
        <p>Hi, {dummyName}</p>
        <img className="profile-img" alt="Profile img" src={dummyProfileImage} />
      </div>
    </header>
  )
}

export default Header
