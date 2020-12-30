<<<<<<< HEAD
import React, {useState} from 'react';
import { View,Text } from 'native-base';
import { Button, Image} from 'react-native';
import styles from '../styles';

export default function EditPost({ navigation }) {
=======
import React, { useState, useEffect } from 'react';
import { View, Container } from 'native-base';
import { Button, Image, TextInput, Pressable, Keyboard } from 'react-native';
import styles from '../styles';
import axios from 'axios';
import { axios_config, url } from '../Config';

export default function EditPost({ route, navigation }) {
    console.log(route)
    const [originalPost, setOriginalPost] = useState(route.params.postContent);
    const finalUrl = url + 'Forum';
>>>>>>> home

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitleVisible: false,
            headerBackImage: () => <Image style={styles.backImage} source={require('../image/cross.png')} />,
<<<<<<< HEAD
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


=======
        });
    }, [navigation]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => DoModify(originalPost)} title="儲存" />
            ),
        });
    }, [originalPost])

    async function DoModify(content) {
        const editPost = {
            records: [{
                fields: {
                    PostContent: content
                },
                id: route.params.itemId
            }]
        }

        try {
            await axios.patch(finalUrl, editPost, axios_config);
            navigation.goBack();
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            <View>
                <Pressable onPress={Keyboard.dismiss}>
                    <TextInput style={styles.textInput}
                        multiline={true}
                        onChangeText={text => setOriginalPost(text)}
                        value={originalPost}
                    />
                </Pressable>
            </View>
        </Container>
    )
>>>>>>> home
}