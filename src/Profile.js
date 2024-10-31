import React from 'react';

function Profile({ name, imageUrl }) {
  return (
    <div className="profile">
      <img src={imageUrl} alt={`${name}'s profile`} className="profile-img" />
      <h3>{name}</h3>
    </div>
  );
}

export default Profile;