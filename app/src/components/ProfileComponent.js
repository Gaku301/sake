/**
 * @returns ProfileComponent
 */

import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ProfileComponent = ({ user }) => {
  // user情報
  const userInfo = user;

  return (
    <ScrollView>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10
      }}>
        <Ionicons
          name="person-circle-outline"
          size={80}
          style={{marginRight: 10}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{userInfo.name}</Text>
          <Text style={{fontWeight: 'bold', paddingTop:10}}>@{userInfo.id}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileComponent;
