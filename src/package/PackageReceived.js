import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Fab } from 'native-base';

export default function PackageReceived({ navigation }) {


    



return(
    <View>  
        <Text>This is PackageReceived Screen</Text>  
    </View>  
);
}

PackageReceived.navigationOptions={
    tabBarIcon:({tintColor, focused})=>(  
        <Icon  
            name={focused ? 'ios-home' : 'md-home'}  
            color={tintColor}  
            size={25}  
        />  
    )  
}

