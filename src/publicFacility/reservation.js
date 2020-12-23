
import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button, Modal } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, Fab } from 'native-base';
import styles from '../styles';
import AddPost from './AddPost';
import axios from 'axios';
import Moment from 'moment';
import {axios_config, url} from '../Config';

export default function reservation({ navigation }) {
    // const finalUrl = url+'Forum?maxRecords=30&view=Grid%20view';
    
    const [posts, setPost] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);  


    const renderItem = ({ item }) => (
        <Card>
            <CardItem bordered>
                <Left>
                    <Thumbnail small source={item.fields.ProfilePic} />
                    <Body>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{item.fields.Name}</Text>
                            <Right>
                                <Text>{Moment(item.fields.PostTime).format('YYYY-MM-DD HH:mm')}</Text>
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
        const result = await axios.get(finalUrl,axios_config);
        console.log(result);
        setPost(result.data.records);
    }

    useEffect(() => {
        fetchData();
    }, [modalVisible]);

    function AddFormVisibleOrNot() {
        setModalVisible(false);
    }

    return (
        <Container style={styles.container}>
            <Content style={styles.item}>
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                />
            </Content>
        </Container>
    );
}