import React from 'react';

const UserAvatar = ({ className, email }) => {
  const roboHashUrl = `https://robohash.org/${encodeURIComponent(email.trim().toLowerCase())}`;

  return <img className={className} src={roboHashUrl} alt="User avatar" />;
};

export default UserAvatar;


