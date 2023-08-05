import React from 'react'

const Header: React.FunctionComponent = () => {
  const dummyName: string = "Réka"

  return (
    <header>
      <div>
        <p>Hi, {dummyName}</p>
        <img className="profile-img" alt="Profile img" src="/assets/profile_img.jpg" />
      </div>
    </header>
  )
}

export default Header
