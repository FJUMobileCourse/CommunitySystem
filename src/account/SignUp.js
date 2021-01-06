import React, { useState } from 'react';
import { Button, View, Text, TextInput, Modal, StyleSheet, Alert, Pressable, Keyboard, Image } from 'react-native';
import styles from './SignUpStyles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Container } from 'native-base';
import * as ImagePicker from 'expo-image-picker';



export default function SignUp() {

  const navigation = useNavigation();

  const [ID, setID] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confrim, setConfrim] = useState(false);

  const axios_config = {
    headers: {
      'Authorization': 'Bearer keyUbBAfgTC85VHET',
      'Content-Type': 'application/json'
    }
  };


  const addMember = async () => {
    try {
      const newPerson = {
        fields: {
          ID: ID,
          Name: displayName,
          Phone: phone,
          Email: email,
          Password: password
        }

      }
      if (ID || displayName || phone || email || password == '') {
        setMessage('必填欄位不能為空');
        return;
      }
      console.log('newPerson', newPerson)
      const result = await axios.post('https://api.airtable.com/v0/appueWqqS6bw4lpMD/Member',
        newPerson, axios_config);

      console.log('result', result);
      setMessage('註冊成功，請前往登入');
      setConfrim(true);
    }
    catch (e) {
      console.log("error:" + e);
    }
  }

  function Close() {
    setConfrim(false);
    navigation.navigate('帳號登入')
  }



  return (
    <Container>
      <View style={styles.form}>
        <Pressable onPress={Keyboard.dismiss}>
          <TextInput
            style={styles.inputStyle}
            placeholder="使用者帳號(必填)"
            value={ID}
            onChangeText={text => setID(text)}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="姓名(必填)"
            value={displayName}
            onChangeText={text => setDisplayName(text)}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="電子信箱(必填)"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="手機號碼(必填)"
            value={phone}
            onChangeText={text => setPhone(text)}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="密碼(必填)"
            value={password}
            onChangeText={text => setPassword(text)}
            maxLength={15}
            secureTextEntry={true}
          />

          <Button
            onPress={addMember}
            title="註冊"
          />

          <Modal transparent={true} visible={confrim}>
            <View style={style.modalView}>
              <Text>{message}</Text>
              <Button title='前往登入' onPress={() => Close()}>
              </Button>
            </View>
          </Modal>

          <Button onPress={() => navigation.navigate('帳號登入')} title='已經註冊，我要登入'></Button>
        </Pressable>
      </View>
    </Container >
  )
}


const style = StyleSheet.create({
  modalView: {
    margin: 60,
    marginTop: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})