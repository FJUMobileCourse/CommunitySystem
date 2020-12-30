<<<<<<< HEAD
import React, { useState } from 'react';
import { Button, TextInput, Modal, Text } from 'react-native';
import styles from '../styles';
import axios from 'axios';
import {axios_config, url} from '../Config';

export default function PersonAdd(props) {
    const finalUrl = url+'Forum?maxRecords=30&view=Grid%20view';
    const [content, setContent] = useState("");

    async function sendData() {
        const newPost = {
            fields: {
                PostContent: content,
                PostTime: new Date()
=======
import React, { useState, useEffect } from 'react';
import { Button, TextInput, Modal, Text, Image, View, Pressable, Keyboard } from 'react-native';
import { Container } from 'native-base';
import styles from '../styles';
import axios from 'axios';
import { axios_config, url } from '../Config';

export default function AddPost({ navigation }) {
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
                PostTime: new Date(),
                Member: ["recLmKb1fowhZ8iig"] //住戶A，要記得改!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
>>>>>>> home
            }
        }

        try {
<<<<<<< HEAD
            const result = await axios.post(finalUrl, newPost, axios_config);
            console.log(result);
            //setPersons(result.data.records);
            props.AddFormVisibleOrNot();
=======
            await axios.post(finalUrl, newPost, axios_config);
            navigation.goBack();
>>>>>>> home
        }
        catch (e) {
            console.log("error:" + e);
        }
    }

<<<<<<< HEAD
    function DoInsert() {
        sendData();
    }

    return (
        <Modal visible={props.modalVisible}>
            <TextInput style={styles.modal} placeholder="想說點什麼呢？" value={content} onChangeText={text => setContent(text)} />
            {/* <Input placeholder="發文時間" type="hidden" value={time} onChangeText={setTime(text)} /> */}
            <Button onPress={DoInsert} title="新增" />
        </Modal>
=======
    return (
        <Container>
            <View>
                <Pressable onPress={Keyboard.dismiss}>
                    <TextInput style={styles.textInput}
                        multiline={true}
                        placeholder="想說點什麼呢？"
                        onChangeText={text => setContent(text)}
                        value={content} />
                </Pressable>
            </View>
        </Container>
>>>>>>> home
    );

}