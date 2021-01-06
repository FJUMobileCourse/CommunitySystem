import React, { useEffect, useState } from 'react';
import { Alert, Button, TextInput, Text, View, StyleSheet, Pressable, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SignUpStyles';
import axios from 'axios';
import Home from '../Home';
import { Container } from 'native-base';
import { set } from 'react-native-reanimated';
import Index from '../forum/Forum';
import { axios_config, url } from '../Config';

export default function SignIn() {
    const navigation = useNavigation();

    const [UserData, setUserData] = useState([]);
    const [UserID, setID] = useState("");
    const [UserPassword, setPassword] = useState("");
    const [text, setText] = useState("");
    const finalUrl = url + 'Member';

    const axios_config = {
        headers: {
            'Authorization': 'Bearer keyUbBAfgTC85VHET',
            'Content-Type': 'application/json'
        }
    };


    // async function getData() {

    //     const result = await axios.get('https://api.airtable.com/v0/appueWqqS6bw4lpMD/Member', axios_config);
    //     setUserData(result.data.records)
    //     console.log(result.data.records)
    // }

    async function getData() {
        const result = await axios.get(finalUrl, axios_config);
        setUserData(result.data.records)
    }

    async function Login() {
        try {
            for (let index = 0; index < UserData.length; index++) {

                // const ID = UserData[index].fields.ID;
                // if (ID == UserID.toString()) {
                //     if (UserData[index].fields.Password == UserPassword) {
                //         setText('登入成功')

                const ID = UserData[index].fields.ID;
                if (ID == UserID.toString()) {
                    if (UserData[index].fields.Password == UserPassword) {
                        setText('登入成功');
                        PassUserIdToHome(UserData[index].id);
                        break;
                    }
                }
                else {
                    setText('帳號密碼錯誤')
                }


            }
        }
        //     catch (error) {
        //         console.log('error massage')
        //     }


        // }

        // useEffect(() => { getData() }, [text])


        // return (
        //     <Container>
        //         <View style={styles.form}>
        //             <Pressable onPress={Keyboard.dismiss}>
        //                 <TextInput
        //                     style={styles.inputStyle}
        //                     placeholder="使用者帳號"
        //                     value={UserID}
        //                     onChangeText={text => setID(text)}
        //                 />

        //                 <TextInput
        //                     style={styles.inputStyle}
        //                     placeholder="密碼"
        //                     value={UserPassword}
        //                     onChangeText={text => setPassword(text)}
        //                     maxLength={15}
        //                     secureTextEntry={true}
        //                 />

        //                 <Button onPress={() => Login()} title="登入" />
        //                 <Text>{text}</Text>

        //             </Pressable>
        //         </View>
        //     </Container>
        // )

        //

        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => { getData() }, [text])

    function PassUserIdToHome(id) {
        console.log(id)
        navigation.navigate('AfterSignIn', { userID: id });
    }


    return (
        <View style={styles.form}>

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
            <Button onPress={() => navigation.navigate('SignUp')} title='尚未註冊嗎？'></Button>
            <Text>{text}</Text>

        </View>
    )
}




