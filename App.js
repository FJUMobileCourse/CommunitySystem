import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from './src/styles';

import AccountScreen from './src/Account';
import Home from './src/Home';
import Forum from './src/forum/Forum';
import PostDetail from './src/forum/PostDetail';
import EditPost from './src/forum/EditPost';
import Board from './src/board/Board';
import Reservation from './src/reservation/Reservation';
import Package from './src/package/Package';




const Stack = createStackNavigator();



function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Stack.Screen name="Forum" options={{ title: '住戶討論區' }} component={Forum} />
      <Stack.Screen name="PostDetail" options={{ title: '詳細內容' }} component={PostDetail} />
      <Stack.Screen name="EditPost" options={{ title: '編輯貼文' }} component={EditPost} />
          <Stack.Screen name="Board" options={{ title: '社區布告欄' }} component={Board} />
          <Stack.Screen name="Reservation" options={{ title: '公設預約' }} component={Reservation} />
          <Stack.Screen name="Package" options={{ title: '包裹預約' }} component={Package} />
    </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

/*function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/

export default function App(){
//function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-contact' : 'ios-contact';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'skyblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
