import React, { useEffect, useState } from 'react';
import { Button, Text, View, Pressable, Keyboard, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SignUpStyles';
import axios from 'axios';
import { Container } from 'native-base';
import { axios_config, url } from '../Config';


export default function AfterSignIn({ route }) {

    const navigation = useNavigation();
    const UserID = route.params
    const [UserData, setUserData] = useState([]);
    const finalUrl = url + 'Member/' + route.params.id.userID;

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
        });
        //類似停止監聽
        return unsubscribe;
    }, [navigation]);


    async function getData() {
        const result = await axios.get(finalUrl, axios_config);
        setUserData(result.data.fields)
        console.log(result)
    }


    // useEffect(() => {
    //     console.log('user', UserID.id.ProfilePic[0].url)
    // }, [])

    return (
        <Container>
            <View style={styles.form}>
                <Pressable onPress={Keyboard.dismiss}>
                    <Image
                        style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 10, marginBottom: 30, }}
                        source={{
                            uri: UserID.id.ProfilePic[0].url,
                        }}
                    />

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>使用者帳號：</Text>
                        <Text >{UserData.ID}</Text>
                    </View>

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>姓名：</Text>
                        <Text>{UserData.Name}</Text>
                    </View>

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>電子信箱：</Text>
                        <Text>{UserData.Email}</Text>
                    </View>

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>手機號碼：</Text>
                        <Text>{UserData.Phone}</Text>
                    </View>

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>密碼：</Text>
                        <Text>{UserData.Password}</Text>
                    </View>

                    <Button onPress={() => navigation.navigate('EditAccount', { UserInfo: UserID.id })} title='編輯資料'></Button>

                </Pressable>
            </View>
        </Container>
    )

}
