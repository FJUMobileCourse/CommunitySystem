import React, {useState} from 'react';
import { View,Text } from 'native-base';
import { Button, Image} from 'react-native';
import styles from '../styles';

export default function EditPost({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerBackImage: () => <Image style={styles.backImage} source={require('../image/cross.png')} />,
            headerRight: () => (
                <Button onPress={ DoModify } title="儲存" />
            ),
        });
    }, [navigation]);




    //當按下儲存時
    function DoModify(){
        alert("編輯完後要存檔");

    }

    return (
        <View>
            <Text>編輯貼文畫面，帶入發文內容就好</Text>
        </View>

    )


}