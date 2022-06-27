/**
 * @returns SettingScreen
 */

import React from 'react';
import { ScrollView, View, Text, Dimensions, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center'}}>
      <View style={{
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        width:windowWidth,
        alignItems: 'center',
        padding: 10,
        margin: 10
      }}>
        <Ionicons name="person-circle-outline" size={100} />
        <Text style={{paddingBottom: 10}}>Change icon</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          alignSelf: 'flex-start'
        }}
      >
        <Text style={{fontWeight: 'bold', paddingHorizontal: 20, width: '35%'}}>User ID</Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 3,
            width: '60%'
          }}
        >@This is ID</TextInput>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          alignSelf: 'flex-start'
        }}
      >
        <Text style={{fontWeight: 'bold', paddingHorizontal: 20, width: '35%'}}>User name</Text>
        <TextInput
            style={{
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 3,
            width: '60%'
          }}
        >Input User name</TextInput>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          alignSelf: 'flex-start'
        }}
      >
        <Text style={{alignSelf:'flex-start', fontWeight: 'bold', paddingHorizontal: 20, width: '35%'}}>introduction</Text>
        <TextInput
          multiline
          numberOfLines={3}
          style={{
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 3,
            width: '60%',
        }}>Input your introduction</TextInput>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
