/**
 * @returns HomeScreen
 */

import React from 'react';
import { ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Image } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont(); // Ioniconsを読み込む時にエラーが出ないように

const HomeScreen = ({ navigation }) => {
  const user_name = [
    {id: 1, name:'Asan'},
    {id: 2, name:'Bsan'},
    {id: 3, name:'Csan'},
    {id: 4, name:'Dsan'},
    {id: 5, name:'Esan'},
    {id: 6, name:'Fsan'},
  ];
  // 画面横横幅
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      {
        user_name.map(user => { return (
          <Card
            title="This is Card"
            containerStyle={{margin: 0, paddingHorizontal:0}}
            key={user.id}
          >
            {/* User Info */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 10,
                paddingHorizontal: 5,
              }}
              onPress={() => navigation.navigate('Profile', {
                user: user,
              })}
            >
              <Ionicons name="person-circle-outline" size={35} />
              <Text style={{marginLeft: 10}}>This is {user.name}</Text>
            </TouchableOpacity>
            {/* Post Image */}
            <Image
              style={{
                width: windowWidth,
                height: 300,
                margin: 0,
              }}
            />
            {/* Post Detail */}
            <View style={{paddingHorizontal: 5}}>
              <Text
                style={{fontSize:20, fontWeight: 'bold', paddingTop:10, paddingBottom:5}}
              >
                北秋田
              </Text>
              <Text>This is Description</Text>
            </View>
          </Card>
        )})
      }
    </ScrollView>
  );
};

export default HomeScreen;
