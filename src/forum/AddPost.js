import React, { useState, useEffect } from 'react';
import { Button, TextInput, Modal, Text, Image, View } from 'react-native';
import styles from '../styles';
import axios from 'axios';
import { axios_config, url } from '../Config';

export default function AddPost({navigation}) {
    const finalUrl = url + 'Forum?maxRecords=30&view=Grid%20view';
    const [content, setContent] = useState("");

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerBackImage: () => <Image style={styles.backImage} source={require('../image/cross.png')} />,
            headerRight: () => (
                <Button onPress={DoInsert} title="儲存" />
            ),
        });
    });

    async function DoInsert() {
        const newPost = {
            fields: {
                PostContent: content,
                PostTime: new Date()
            }
        }

        try {
            console.log(newPost);
            await axios.post(finalUrl, newPost, axios_config);
            navigation.goBack();
        }
        catch (e) {
            console.log("error:" + e);
        }
    }


    return (
        <View>
            <TextInput style={styles.modal} 
                multiline={true}
                numberOfLines = {4}
                placeholder="想說點什麼呢？" 
                onChangeText={text => setContent(text)} 
                value={content} />
        </View>
    );

}