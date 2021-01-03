import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import PackageNotReceived from './PackageNotReceived';
import PackageReceived from './PackageReceived';
  

const Stack = createStackNavigator();

function PackageNotReceivedScreen() {
    return (
      <Stack.Navigator>
          <Stack.Screen name="PackageNotReceived" component={PackageNotReceived} options={{headerMode: 'none', headerShown : false}} />
      </Stack.Navigator>
    );
  }
  
  function PackageReceivedScreen() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="PackageReceived" component={PackageReceived} options={{headerMode: 'none', headerShown : false}} />
    </Stack.Navigator>
    );
  }

  

const Tab = createMaterialTopTabNavigator();

export default function PackageHome() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'PackageNotReceived') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'PackageReceived') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
      
        <Tab.Screen name="PackageNotReceived" component={PackageNotReceivedScreen} options={{ tabBarLabel: '待領取包裹' }} />
        <Tab.Screen name="PackageReceived" component={PackageReceivedScreen} options={{ tabBarLabel: '已領取包裹' }}/>
      </Tab.Navigator>
    
  );
  
}

