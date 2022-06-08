/**
 * @returns ProfileComponent
 */

import React from 'react';
import { ScrollView, View, Text } from 'react-native';

const ProfileComponent = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile!</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileComponent;
