/**
 * @returns ProfileScreen
 */

import React, { useEffect, useState } from 'react';
import ProfileComponent from '../components/ProfileComponent';
import { API_URL_V1 } from 'react-native-dotenv';


const ProfileScreen = ({ route }) => {
  // 選択されたユーザー情報
  const [user, setUserData] = useState({});
  useEffect(() => {
    setUserData(route.params.user);
  }, [route.params.user]);

  // 選択されたユーザーのpostをセットする
  const [posts, setPostData] = useState([]);
  useEffect(() => {
    if (user.disp_id === '' || user.disp_id === undefined) return;
    // Get post datas
    fetch(`${API_URL_V1}/user/${user.disp_id}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.status === true) {
          setPostData(json.result.user.posts);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return (
    <ProfileComponent
      user={user}
      posts={posts}
    />
  );
};

export default ProfileScreen;
