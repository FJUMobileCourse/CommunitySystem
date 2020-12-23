import React, {useState} from 'react';
import {Button, View, Text, TextInput } from 'react-native';
import styles from './SignUpStyles';

export default function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return(
    <View style={styles.form}>
      <TextInput
        style={styles.inputStyle}
        placeholder="姓名"
        value={displayName}
        onChangeText={text=>setDisplayName(text)}
      />      
      <TextInput
        style={styles.inputStyle}
        placeholder="電子信箱"
        value={email}
        onChangeText={text=>setEmail(text)}
      />

      <TextInput
        style={styles.inputStyle}
        placeholder="密碼"
        value={password}
        onChangeText={text=>setPassword(text)}
        maxLength={15}
        secureTextEntry={true}
      />   
      <Button
        title="註冊"
      />

      <Text>已經註冊，我要登入</Text>
    </View>
  )
}
