/**
 * @returns ProfileScreen
 */

import React from 'react';
import ProfileComponent from '../components/ProfileComponent';


const ProfileScreen = ({ route }) => {
  // 選択されたユーザー情報
  const user = route.params.user ?? {};

  return (
    <ProfileComponent user={user}/>
  );
};

export default ProfileScreen;
