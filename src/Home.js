import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/community.png';

function reservation() {

}

function forum() {

}

function board() {


}

function packages() {

}



//主頁面home
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <View style={{ flex: 1 }}>
                </View>
                <View style={styles.forbuttonsone}>
                    <Button onPress={reservation} title="公設預約" />
                    <Button onPress={forum} title="住戶討論" />
                </View>
                <View style={styles.forbuttonstwo}>
                    <Button onPress={board} title="社區布告欄" />
                    <Button onPress={packages} title="包裹領取" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 380,
    height: 300,
    marginTop: 50,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    }, 
  forbuttonsone: {
      flex: 2,
      flexDirection:'row',
    },
    forbuttonstwo: {
      flex: 2,
      flexDirection: 'row',
    },
});