import { StatusBar } from 'expo-status-bar';
import * as React from "react";
import { Text, View, Image, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from './src/styles';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import SignUp from './src/account/SignUp';
import SignIn from './src/account/SignIn';
import Home from './src/Home';
import Forum from './src/forum/Forum';
import Board from './src/board/Board';
import PostDetail from './src/forum/PostDetail';
import EditPost from './src/forum/EditPost';
import AddPost from './src/forum/AddPost';
import Board from './src/board/Board';
import PackageHome from './src/package/PackageHome';
import PackageNotReceived from './src/package/PackageNotReceived';
import PackageReceived from './src/package/PackageReceived';


const Stack = createStackNavigator();
const Account = createStackNavigator();



function HomeScreen({ navigation, route }) {  
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "PackageHome"){
        navigation.setOptions({tabBarVisible: false});
    }else {
        navigation.setOptions({tabBarVisible: true});
    }
    }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="社區服務"
        component={Home}
        options={{ tabBarLabel: '社區服務' }}
      />
      <Stack.Screen name="Forum" options={{ title: '住戶討論區' }} component={Forum} />
      <Stack.Screen name="PostDetail" options={{ title: '詳細內容' }} component={PostDetail} />
      <Stack.Screen name="EditPost" options={{ title: '編輯貼文' }} component={EditPost} />
      <Stack.Screen name="AddPost" options={{ title: '新增貼文' }} component={AddPost} />
      <Stack.Screen name="Board" options={{ title: '社區佈告欄' }} component={Board} />
      <Stack.Screen name="PackageHome" options={{ title: '包裹領取' }} component={PackageHome} />
      <Stack.Screen name="PackageNotReceived" options={{ title: '待領取包裹' }} component={PackageNotReceived} />
      <Stack.Screen name="PackageReceived" options={{ title: '已包裹領取' }} component={PackageReceived} />
    </Stack.Navigator>
  );
}

function AccountScreen(){
  return(
  <Account.Navigator>
      <Account.Screen name="帳號註冊" component={SignUp}/>
      <Account.Screen name="帳號登入" component={SignIn}/>
    </Account.Navigator>
    )
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

            if (route.name === '首頁') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === '會員中心') {
              iconName = focused ? 'ios-contact' : 'ios-contact';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'skyblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="首頁" component={HomeScreen} />
        <Tab.Screen name="會員中心" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
