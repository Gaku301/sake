/**
 * @returns HomeScreen
 */

import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { API_URL_V1 } from 'react-native-dotenv';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont(); // Ioniconsを読み込む時にエラーが出ないように

const HomeScreen = ({ navigation }) => {
  // 全ての投稿を取得する
  const [posts, setPostData] = useState([]);
  useEffect(() => {
    // Get post datas
    fetch(`${API_URL_V1}/index`)
      .then((response) => response.json())
      .then((json) => {
        if (json.status === true) {
          setPostData(json.result.posts);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 画面横横幅
  const windowWidth = Dimensions.get('window').width;

  return (
    <ScrollView>
      {
        posts.map(post => { return (
          <Card
            title="This is Card"
            containerStyle={{margin: 0, paddingHorizontal:0}}
            key={post.id}
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
                user: {
                  id: post.user_id,
                  disp_id: post.user_disp_id,
                  name: post.user_name,
                },
              })}
            >
              <Ionicons name="person-circle-outline" size={35} />
              <Text style={{marginLeft: 10}}>{post.user_name}</Text>
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
                {post.kuramoto}
              </Text>
              <Text>{post.content}</Text>
            </View>
          </Card>
        )})
      }
    </ScrollView>
  );
};

export default HomeScreen;
