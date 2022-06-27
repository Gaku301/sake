/**
 * @returns SearchScreen
 */

import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchScreen = () => {
  return (
    <ScrollView>
      <SearchBar
        searchIcon={<Ionicons name="search" size={20} />}
        placeholder="put search word"
        round={true}
        lightTheme={true}
        containerStyle={{paddingVertical: 0, backgroundColor: '#F2F2F2'}}
        inputContainerStyle={{backgroundColor: '#E6E6E6'}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>SearchScreen!</Text>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
