import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Stack } from 'react-native';
import { Navigator } from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PackageHome from './src/package/PackageHome';
import PackageDetail from './src/package/PackageDetail';


function PackageHomeScreen() {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Home Screen</Text>

    </View>

  );

}



const Stack = createStackNavigator();



function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={PackageHomeScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

}



export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
