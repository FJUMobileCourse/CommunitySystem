import React from 'react';
import { Image, StyleSheet, View, Button } from "react-native";
import logo from '../assets/community.png';


//主頁面home
export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerBackImage: () => <Image source={require('./image/empty.png')} />,
    });
  }, [navigation]);


  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={{ flex: 1 }}>
      </View>
      <View style={styles.forbuttonsone}>
        <Button onPress={() => navigation.navigate("ReservationHome")} title="公設預約" />
        <Button onPress={() => navigation.navigate("Forum")} title="住戶討論區" />
      </View>
      <View style={styles.forbuttonstwo}>
        <Button onPress={() => navigation.navigate("Board")} title="社區佈告欄" />
        <Button onPress={() => navigation.navigate("PackageHome")} title="包裹領取" />
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
    flex: 2,
    flexDirection: 'row',
  },
  forbuttonstwo: {
    flex: 2,
    flexDirection: 'row',
  },
});