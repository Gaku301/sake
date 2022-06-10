/**
 * @returns UserScreen
 */

import React from 'react';
import ProfileComponent from '../components/ProfileComponent';


const UserScreen = () => {
  // 利用しているユーザー情報
  const user = {
    id: 'takane_xx',
    name: 'Takane',
  };

  return (
    <ProfileComponent user={user} />
  );
};

export default UserScreen;
