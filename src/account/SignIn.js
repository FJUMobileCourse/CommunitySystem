import React, { useEffect, useState } from 'react';
import { Alert, Button, TextInput, Text, View, StyleSheet, Pressable, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SignUpStyles';
import axios from 'axios';
import Home from '../Home';
import { Container } from 'native-base';

export default function SignIn() {

    const navigation = useNavigation();

    const [UserData, setUserData] = useState([]);
    const [UserID, setID] = useState("");
    const [UserPassword, setPassword] = useState("");
    const [text, setText] = useState("");

    const axios_config = {
        headers: {
            'Authorization': 'Bearer keyUbBAfgTC85VHET',
            'Content-Type': 'application/json'
        }
    };


    async function getData() {

        const result = await axios.get('https://api.airtable.com/v0/appueWqqS6bw4lpMD/Member', axios_config);
        setUserData(result.data.records)
        console.log(result.data.records)
    }


    async function Login() {
        try {
            for (let index = 0; index < UserData.length; index++) {

                const ID = UserData[index].fields.ID;
                if (ID == UserID.toString()) {
                    if (UserData[index].fields.Password == UserPassword) {
                        setText('登入成功')
                        break;
                    }
                }
                else {
                    setText('帳號密碼錯誤')
                }


            }
        }
        catch (error) {
            console.log('error massage')
        }


    }

    useEffect(() => { getData() }, [text])


    return (
        <Container>
            <View style={styles.form}>
                <Pressable onPress={Keyboard.dismiss}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="使用者帳號"
                        value={UserID}
                        onChangeText={text => setID(text)}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        placeholder="密碼"
                        value={UserPassword}
                        onChangeText={text => setPassword(text)}
                        maxLength={15}
                        secureTextEntry={true}
                    />

                    <Button onPress={() => Login()} title="登入" />
                    <Text>{text}</Text>

                </Pressable>
            </View>
        </Container>
    )

}