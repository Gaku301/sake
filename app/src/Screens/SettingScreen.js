/**
 * @returns SettingScreen
 */

import React from 'react';
import {ScrollView, View, Text} from 'react-native';

const SettingScreen = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settigns!</Text>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
