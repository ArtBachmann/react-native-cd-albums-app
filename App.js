import React from 'react';
import { View } from 'react-native'
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

