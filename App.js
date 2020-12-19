import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Navigator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PackageHome from './src/package/PackageHome';
import PackageDetail from './src/package/PackageDetail';


