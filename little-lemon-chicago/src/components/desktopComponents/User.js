import React from 'react'
import PropTypes from 'prop-types'

const User = ({ provider, profile, onLogout }) => {
  return (
    <div className="user-profile">
      <h2>Welcome, {profile.name || 'User'}!</h2>
      <p>Logged in with: {provider}</p>
      <div className="user-details">
        {profile.picture && <img src={profile.picture} alt="Profile" />}
        <p>Email: {profile.email}</p>
        <p>Profile ID: {profile.id}</p>
      </div>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}
User.propTypes = {
  provider: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default User
