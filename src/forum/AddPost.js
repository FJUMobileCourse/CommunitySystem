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
            }
        }

        try {
            const result = await axios.post(finalUrl, newPost, axios_config);
            console.log(result);
            //setPersons(result.data.records);
            props.AddFormVisibleOrNot();
        }
        catch (e) {
            console.log("error:" + e);
        }
    }

    function DoInsert() {
        sendData();
    }

    return (
        <Modal visible={props.modalVisible}>
            <TextInput style={styles.modal} placeholder="想說點什麼呢？" value={content} onChangeText={text => setContent(text)} />
            {/* <Input placeholder="發文時間" type="hidden" value={time} onChangeText={setTime(text)} /> */}
            <Button onPress={DoInsert} title="新增" />
        </Modal>
    );

}