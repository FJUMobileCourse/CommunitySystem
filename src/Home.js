import React, { useState, Component, useEffect } from 'react';
import { Text, Image, StyleSheet, View, Button } from "react-native";
//import Slideshow from 'react-native-image-slider-show';
import { SliderBox } from "react-native-image-slider-box";
import logo from '../assets/community.png';





//主頁面home
export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerBackImage: () => <Image source={require('./image/empty.png')} />,
    });
  }, [navigation]);

  const [image] = useState([
                                require('../assets/community.png'),
                                require('../assets/community2.png'),
                                require('../assets/community3.png')]);


  return (
    <View style={styles.container}>
      <View style={{flex:3}}>
      <SliderBox 
        images={image} 
        autoplay
        circleLoop
        sliderBoxHeight={400}
        />
      </View>
      <View style={{flex:1}}>
      </View>
      <View style={styles.forbuttonsone}>
        <Button onPress={() => navigation.navigate("ReservationHome")} title="公設預約" />
        <Text>     </Text>
        <Button onPress={() => navigation.navigate("Forum")} title="住戶討論區" />
      </View>
      <View style={styles.forbuttonstwo}>
        <Button onPress={() => navigation.navigate("Board")} title="社區佈告欄" />
        <Text>     </Text>
        <Button onPress={() => navigation.navigate("PackageHome")} title="包裹領取" />
        <Text>    </Text>
      </View>
    </View>
  );
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
    flex: 1,
    flexDirection: 'row',

  },
  forbuttonstwo: {
    flex: 2,
    flexDirection: 'row',
  },
});