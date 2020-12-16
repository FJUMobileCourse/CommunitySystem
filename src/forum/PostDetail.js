import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, List, ListItem, Item, Input, Button } from 'native-base';
import styles from '../styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import OptionsMenu from 'react-native-option-menu';


export default function PostDetail({ navigation }) {
    const MoreIcon = require('../image/more-menu.jpg');

    const listData = [
        { name: "Kumar Pratike", key: "1" },
        { name: "Lyn Hsiao", key: "2" },
        { name: "Lyn Hsiao", key: "3" },
        { name: "Lyn Hsiao", key: "4" },
        { name: "Lyn Hsiao", key: "5" },
        { name: "Lyn Hsiao", key: "6" },
        { name: "Lyn Hsiao", key: "7" },
        { name: "Lyn Hsiao", key: "8" },
        { name: "Lyn Hsiao", key: "9" },
        { name: "Lyn Hsiao", key: "10" },
        { name: "Lyn Hsiao", key: "11" },
        { name: "Lyn Hsiao", key: "12" },
        { name: "Lyn Hsiao", key: "13" },
        { name: "Lyn Hsiao", key: "14" },
    ];

    const renderItem = (data, rowMap) => (
        <View>
            <ListItem avatar style={styles.rowFront} onPress={() => rowMap[data.item.key].closeRow()}>
                <Left>
                    <Thumbnail small source={require('../image/s.jpeg')} />
                </Left>
                <Body>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text>{data.item.name}</Text>
                        <Right>
                            <Text>12/04 02:27 pm</Text>
                        </Right>
                    </View>
                    <Text note>真是很好的服務。</Text>
                </Body>
            </ListItem>
        </View>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => alert("刪除啦，要先closeRow再刪除這行")}
            >
                <Icon name="trash" style={{ color: '#fff', fontSize: 25 }} />
            </TouchableOpacity>
        </View>
    );

    function EditPost() {
        navigation.navigate('EditPost');
    }

    function DeletePost() {
        alert("刪除貼文");
    }

    return (
        <Container style={styles.container}>
            <Content style={styles.item}>
                <Card >
                    <CardItem bordered>
                        <Left>
                            <Thumbnail small source={require('../image/s.jpeg')} />
                            <Body>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text>社區管理員</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <OptionsMenu
                                            button={MoreIcon}
                                            buttonStyle={{ width: 16, height: 16, resizeMode: "contain" }}
                                            destructiveIndex={1}
                                            options={["編輯貼文", "刪除", "取消"]}
                                            actions={[EditPost, DeletePost]}
                                        />
                                    </View>
                                </View>
                            </Body>

                        </Left>
                    </CardItem>
                    <CardItem header bordered>
                        <Body>
                            <Text>
                                社區公告讓社區住戶里民不錯過第一手訊息，管委會多了一項工具能夠發布重要訊息，線上e化環保更有效率!!!
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-75}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    closeOnRowPress={true}
                    disableRightSwipe={true}
                />

                <ListItem avatar>
                    <Left>
                        <Thumbnail small source={require('../image/s.jpeg')} />
                    </Left>
                    <Body>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Input style={{ fontSize: 15 }} placeholder="請寫下你的留言…" />
                            <Button style={{ backgroundColor: '#0080FF', width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#ffffff' }}>送出</Text>
                            </Button>
                        </View>
                    </Body>
                </ListItem>
            </Content>
        </Container>
    )
}