/**
 * @returns ProfileComponent
 */

import React from 'react';
import { View, Text, useWindowDimensions, Dimensions, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => {
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = Math.floor(windowWidth / 3);
  const data = [
    {width: imageWidth, color: 'black'},
    {width: imageWidth, color: 'white'},
    {width: imageWidth, color: 'black'},
    {width: imageWidth, color: 'white'},
    {width: imageWidth, color: 'white'},
    {width: imageWidth, color: 'white'},
    {width: imageWidth, color: 'white'},
    {width: imageWidth, color: 'white'},
    {width: imageWidth, color: 'white'},
  ];

  return (
    <View>
      <FlatList
        data={data}
        numColumns={3}
        style={{minHeight: 600}}
        // Itemをrenderingする
        renderItem={() => {
            return <Image style={{width: imageWidth, height: imageWidth, backgroundColor: 'white', borderColor: 'black', borderWidth:0.5}} />
          }
        }
      />
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Second</Text>
    </View>
  );
};

const ThirdRoute = () => {
  const windowWidth = Dimensions.get('window').width;
  const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
  ];
  return (
    <View>
      <FlatList
        data={data}
        numColumns={1}
        renderItem={() => {
            return (
              <View style={{
                width: windowWidth,
                height: 80,
                borderColor:'black',
                borderWidth: 0.5,
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Image style={{
                  width: 80, 
                  height:75 , 
                  backgroundColor: 'white',
                }} />
                <View>
                  <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 10
                  }}>ほまれ</Text>
                  <Text style={{paddingLeft: 15}}>愛知県</Text>
                </View>
              </View>
            );
          }
        }
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const ProfileComponent = (props) => {
  // user情報
  const userInfo = props.user;
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'post' },
    { key: 'second', title: 'Drank' },
    { key: 'third', title: 'Want' },
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#222222' }}
      style={{ backgroundColor: '#F9F9F9' }}
      labelStyle={{ color: 'black' }}
    />
  );
  // TabViewの高さをセット（タブ内部の高さ - プロフィール欄の高さ)
  const windowHeight = Dimensions.get('window').height;
  const [dims, setDims] = React.useState(300);

  return (
    // <ScrollView>
    <>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          padding:10
        }}
        onLayout={(event) => {
          let {height} = event.nativeEvent.layout;
          height = windowHeight - height;
          setDims(height);
        }}
      >
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
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={{minHeight: dims}} // heightの設定がないとScrollView内ではTabViewが使えない
      />
    </>
    // </ScrollView>
  );
};

export default ProfileComponent;
