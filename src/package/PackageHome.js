
import { StyleSheet, View, Text, Navigator, FlatList, Button, Modal} from 'react-native';
import React, { useState, Component, useEffect } from 'react';
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, Fab } from 'native-base';
import package_detail from './package_detail';

const package = (props) => {
    const [isRecieved, setIsRecieved] = useState(true);

    return(
        <View>
            <Text>
                包裹303，目前狀態 {isRecieved ? "未領取" : "已領取"};
            </Text>
            <Button>
                onPress = {() => {
                    setIsRecieved(false);
                }}
                disabled = {!isRecieved}
                title={isRecieved ? "未領取" : "已領取"}
            </Button>
        </View>
    );
}