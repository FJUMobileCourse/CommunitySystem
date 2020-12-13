
import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button, Modal } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, Fab } from 'native-base';
import styles from '../styles';
import axios from 'axios';


export default function Index({ navigation }) {
    const axios_config = { headers: {'Authorization': 'Bearer key8HkwZJa0X67dRO'} };
    const url="https://api.airtable.com/v0/appueWqqS6bw4lpMD/Forum?maxRecords=30&view=Grid%20view";

    const [posts, setPost] = useState([]);

    const data = [
        { pic: "url", Publisher: "社區管理員", PostTime: "12/01 10:23 am", PostContent: "社區公告讓社區住戶里民不錯過第一手訊息，管委會多了一項工具能夠發布重要訊息，線上e化環保更有效率!!!", CommentAmount: "15" }
    ];

    const renderItem = ({ item }) => (
        <Card>
            <CardItem bordered>
                <Left>
                    <Thumbnail small source={item.fields.ProfilePic} />
                    <Body>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{item.fields.Name}</Text>
                            <Right>
                                <Text>{item.fields.PostTime}</Text>
                            </Right>
                        </View>
                    </Body>
                </Left>
            </CardItem>
            {/* 到時候導到PostDetail要隨著點擊的文不同，而導去不同的頁面 */}
            <CardItem header bordered button onPress={() => navigation.navigate('PostDetail')}>
                <Body>
                    <Text>{item.fields.PostContent}</Text>
                </Body>
            </CardItem>
            {/* 到時候導到PostDetail要隨著點擊的文不同，而導去不同的頁面 */}
            <CardItem button onPress={() => navigation.navigate('PostDetail')}>
                <Right style={styles.comment}>
                    <Icon active name="chatbubbles" style={{ marginRight: 5 }} />
                </Right>
                <Text>留言 {item.fields.CommentCount}</Text>
            </CardItem>
        </Card>
    )

    async function fetchData () {
        const result = await axios.get(url,axios_config);
        console.log(result);
        setPost(result.data.records);
    }

    useEffect(() => {
        fetchData();
      },[]);

    return (
        <Container style={styles.container}>
            <Content style={styles.item}>
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={item => item.fields.Publisher} />
            </Content>

            <Fab
                active="true"
                direction="up"
                containerStyle={{}}
                style={{ backgroundColor: '#0080FF' }}
                position="bottomRight"
                onPress={() => alert("I want to add post!!!!")}>
                {/* Icon位置好像隨著手機不同會位移 */}
                <Icon active name="add" style={{ fontSize: 35, marginTop: 10 }} />
            </Fab>
        </Container>
    );
}