import React from 'react';
import Profile from './Profile';

function Gallery() {
  const profiles = [
    { name: 'Ada Lovelace', imageUrl: 'https://example.com/ada.jpg' },
    { name: 'Alan Turing', imageUrl: 'https://example.com/alan.jpg' },
  ];

  return (
    <div className="gallery">
      {profiles.map((profile, index) => (
        <Profile key={index} name={profile.name} imageUrl={profile.imageUrl} />
      ))}
    </div>
  );
}

export default Gallery;