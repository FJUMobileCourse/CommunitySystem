import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SignUp from './src/account/SignUp';
import SignIn from './src/account/SignIn';
import Home from './src/Home';
import Forum from './src/forum/Forum';
import Board from './src/board/Board';
import PostDetail from './src/forum/PostDetail';
import EditPost from './src/forum/EditPost';
import AddPost from './src/forum/AddPost';
import ReservationHome from './src/publicFacility/ReservationHome';
import Reservation from './src/publicFacility/Reservation';
import ReservationRecord from './src/publicFacility/ReservationRecord';
import PackageHome from './src/package/PackageHome';
import PackageNotReceived from './src/package/PackageNotReceived';
import PackageReceived from './src/package/PackageReceived';

export default function App() {
  const Stack = createStackNavigator();
  const Account = createStackNavigator();
  const defaultScreen = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function HomeScreen({ navigation, route }) {
    React.useLayoutEffect(() => {
      const routeName = getFocusedRouteNameFromRoute(route);
      if (routeName === "PackageHome") {
        navigation.setOptions({ tabBarVisible: false });
      } else {
        navigation.setOptions({ tabBarVisible: true });
      }
    }, [navigation, route]);

    return (
      <Stack.Navigator>
        <Stack.Screen name="社區服務" options={{ tabBarLabel: '社區服務' }} component={Home} />
        <Stack.Screen name="Forum" options={{ title: '住戶討論區' }} component={Forum} />
        <Stack.Screen name="PostDetail" options={{ title: '詳細內容' }} component={PostDetail} initialParams={{ userID: route.params.id }} />
        <Stack.Screen name="EditPost" options={{ title: '編輯貼文' }} component={EditPost} />
        <Stack.Screen name="AddPost" options={{ title: '新增貼文' }} component={AddPost} initialParams={{ userID: route.params.id }} />
        <Stack.Screen name="Board" options={{ title: '社區佈告欄' }} component={Board} />
        <Stack.Screen name="ReservationHome" options={{ title: '公設預約' }} component={ReservationHome} />
        <Stack.Screen name="Reservation" options={{ title: '預約公設' }} component={Reservation} />
        <Stack.Screen name="ReservationRecord" options={{ title: '預約紀錄' }} component={ReservationRecord} />
        <Stack.Screen name="PackageHome" options={{ title: '包裹領取' }} component={PackageHome} />
        <Stack.Screen name="PackageNotReceived" options={{ title: '待領取包裹' }} component={PackageNotReceived} />
        <Stack.Screen name="PackageReceived" options={{ title: '已包裹領取' }} component={PackageReceived} />
      </Stack.Navigator>
    );
  }

  function AccountScreen() {

  }

  function AfterSignIn(props) {
    return (
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
        <Tab.Screen name="首頁" component={HomeScreen} initialParams={{ id: props.route.params.userID }} />
        <Tab.Screen name="會員中心" component={AccountScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <defaultScreen.Navigator>
        <defaultScreen.Screen name="SignIn" component={SignIn} options={{ title: '登入' }} />
        <defaultScreen.Screen name="SignUp" component={SignUp} options={{ title: '註冊' }} />
        <defaultScreen.Screen name="AfterSignIn" component={AfterSignIn} options={{ headerMode: 'none', headerShown: false }} />
      </defaultScreen.Navigator>
    </NavigationContainer>
  );
}