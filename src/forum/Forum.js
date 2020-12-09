
import React,{ useState,Component } from 'react';
import { FlatList, View, Text, Button, Modal } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, Fab } from 'native-base';
import styles from '../styles';

export default function Index({navigation}) {

  return (
    <Container style={styles.container}>
      <Content style={styles.item}>
        <Card>
          <CardItem bordered>
            <Left>
              <Thumbnail small source={require('../image/s.jpeg')} />
              <Body>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Text>社區管理員</Text>
                  <Right>
                    <Text>12/01 10:23 am</Text>
                  </Right>
                </View>
              </Body>
            </Left>
          </CardItem>
          <CardItem header bordered button onPress={() => navigation.navigate('PostDetail')}>
            <Body>
              <Text>
                社區公告讓社區住戶里民不錯過第一手訊息，管委會多了一項工具能夠發布重要訊息，線上e化環保更有效率!!!
              </Text>
            </Body>
          </CardItem>
          <CardItem button onPress={() => navigation.navigate('PostDetail')}>
            <Right style={styles.comment}>
              <Icon active name="chatbubbles" style={{ marginRight: 5 }} />
            </Right>
            <Text>留言 15</Text>
          </CardItem>
        </Card>
      </Content>

      <Fab
        active="true"
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#0080FF' }}
        position="bottomRight"
        onPress={() => alert("I want to add post!!!!")}>
        <Icon active name="add" style={{fontSize:35, marginTop: 10}} />
      </Fab>
    </Container>
  );
}