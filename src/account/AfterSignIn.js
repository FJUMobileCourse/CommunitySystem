import React, { useEffect, useState } from 'react';
import { Alert, Button, TextInput, Text, View, StyleSheet, Pressable, Keyboard, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SignUpStyles';
import { Container } from 'native-base';



export default function AfterSignIn({ route }) {

    const navigation = useNavigation();
    const UserID = route.params


    function PassUserIdToHome(id, MemberInfo, Name) {
        navigation.navigate('EditAccount', { userID: id, MID: MemberInfo, Name: Name });
    }
    useEffect(() => {
        console.log('user', UserID.id.ProfilePic[0].url)
    }, [])

    return (
        <Container>
            <View style={styles.form}>
                <Pressable onPress={Keyboard.dismiss}>
                    <Image
                        style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: '100%', marginBottom: 30, }}
                        source={{
                            uri: UserID.id.ProfilePic[0].url,
                        }}
                    />

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>使用者帳號：</Text>
                        <Text >{UserID.id.ID}</Text>
                    </View>

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>姓名：</Text>
                        <Text>{UserID.id.Name}</Text>
                    </View>

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>電子信箱：</Text>
                        <Text>{UserID.id.Email}</Text>
                    </View>

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>手機號碼：</Text>
                        <Text>{UserID.id.Phone}</Text>
                    </View>

                    <View style={styles.inputStyle}>
                        <Text style={styles.titlestyle}>密碼：</Text>
                        <Text>{UserID.id.Password}</Text>
                    </View>

                    <Button onPress={() => navigation.navigate('EditAccount', { UserInfo: UserID.id })} title='編輯資料'></Button>

                </Pressable>
            </View>
        </Container>
    )

}