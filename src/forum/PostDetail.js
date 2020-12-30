<<<<<<< HEAD
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
=======
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
>>>>>>> home
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, List, ListItem, Item, Input, Button } from 'native-base';
import styles from '../styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import OptionsMenu from 'react-native-option-menu';
<<<<<<< HEAD


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
=======
import { axios_config, url } from '../Config';
import axios from 'axios';
import Moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function PostDetail({ route, navigation }) {
    const MoreIcon = require('../image/more-menu.jpg');
    const finalUrl = url + 'Comment?maxRecords=30&view=Grid%20view';
    const [posts, setPosts] = useState(null);
    const [comments, setCommemts] = useState([]);
    const [addContent, setAddContent] = useState("");
    var getPostUrl = url + 'Forum/' + route.params.itemId;
    var getCommentUrl;
    //var getPostUrl = url + 'Forum/' + 'rec91zlN7eqOLqV5p'; //PostID = 70，先寫死

    //只要到貼文詳細頁面就重新render頁面
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchPost();
        });
        //類似停止監聽
        return unsubscribe;
    }, [navigation]);

    //確保posts有值後再去接url
    useEffect(() => {
        if (posts != null) {
            getCommentUrl = url + 'Comment?filterByFormula=PostID+%3D+' + posts.fields.PostID.toString() + '&sort%5B0%5D%5Bfield%5D=CommentTime&sort%5B0%5D%5Bdirection%5D=asc'
            fetchComment();
        }
    }, [posts])

    const renderItem = (data, rowMap) => (
        <View style={styles.rowFront} >
            <ListItem avatar onPress={() => rowMap[data.item.fields.CommentID].closeRow()}>
                <Left>
                    <Thumbnail small source={data.item.fields.ProfilePic} />
                </Left>
                <Body>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text>{data.item.fields.Name}</Text>
                        <Right>
                            <Text>{Moment(data.item.fields.CommentTime).format('YYYY-MM-DD HH:mm')}</Text>
                        </Right>
                    </View>
                    <Text note>{data.item.fields.Content}</Text>
>>>>>>> home
                </Body>
            </ListItem>
        </View>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
<<<<<<< HEAD
                onPress={() => alert("刪除啦，要先closeRow再刪除這行")}
=======
                onPress={() => DeleteComment(data.item, rowMap)}
>>>>>>> home
            >
                <Icon name="trash" style={{ color: '#fff', fontSize: 25 }} />
            </TouchableOpacity>
        </View>
    );

<<<<<<< HEAD
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
=======
    async function fetchPost() {
        try {
            const resultOfPost = await axios.get(getPostUrl, axios_config);
            setPosts(resultOfPost.data);
        }
        catch (e) {
            console.log('error:' + e)
        }
    }

    async function fetchComment() {
        try {
            const resultOfComment = await axios.get(getCommentUrl, axios_config);
            setCommemts(resultOfComment.data.records);
        }
        catch (e) {
            console.log('error:' + e)
        }
    }

    function EditPost() {
        navigation.navigate('EditPost', {
            itemId: posts.id,
            postContent: posts.fields.PostContent
        });
    }

    //TODO: 直接刪貼文也要連留言一起刪掉！
    async function DeletePost() {
        await axios.delete(getPostUrl, axios_config)
            .then(
                navigation.navigate('Forum')
            )
            .catch(error => console.log(error))
    }

    async function DeleteComment(item, rowMap) {
        const deleteCommentUrl = url + 'Comment/' + item.id;
        rowMap[item.fields.CommentID].closeRow();

        try {
            await axios.delete(deleteCommentUrl, axios_config);
            getCommentUrl = url + 'Comment?filterByFormula=PostID+%3D+' + posts.fields.PostID.toString() + '&sort%5B0%5D%5Bfield%5D=CommentTime&sort%5B0%5D%5Bdirection%5D=asc'
            fetchComment();
        }
        catch (e) {
            console.log(e);
        }
    }

    async function InsertComment() {
        const newComment = {
            fields: {
                Content: addContent,
                CommentTime: new Date(),
                Forum: [posts.id],
                Member: ["recLmKb1fowhZ8iig"] //住戶A，要記得改!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            }
        }
        try {
            await axios.post(finalUrl, newComment, axios_config);
            setAddContent('');
            getCommentUrl = url + 'Comment?filterByFormula=PostID+%3D+' + posts.fields.PostID.toString() + '&sort%5B0%5D%5Bfield%5D=CommentTime&sort%5B0%5D%5Bdirection%5D=asc'
            fetchComment();
        }
        catch (e) {
            console.log("error:" + e);
        }
    }


    // TODO: KeyboardAvoidingView

    // <KeyboardAvoidingView
    //     keyboardVerticalOffset={1300}
    //     enabled={true}
    //     style={{ flex: 1 }}
    //     behavior="padding" >
    // </KeyboardAvoidingView>
    return (
        <Container>
            {/* <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"> */}
            <KeyboardAwareScrollView>
                <SwipeListView style={styles.item}
                    ListHeaderComponent={
                        <Card>
                            <CardItem bordered>
                                <Left>
                                    <Thumbnail small source={posts && posts.fields.ProfilePic} />
                                    <Body>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{posts && posts.fields.Name}</Text>
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
                                    <Text>{posts && posts.fields.PostContent}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    }
                    data={comments}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    keyExtractor={item => item.fields.CommentID.toString()}
>>>>>>> home
                    rightOpenValue={-75}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    closeOnRowPress={true}
                    disableRightSwipe={true}
<<<<<<< HEAD
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
=======
                    ListFooterComponent={
                        <ListItem avatar>
                            <Body >
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <TextInput
                                            style={{ fontSize: 15, width: 270 }}
                                            placeholder="請寫下你的留言…"
                                            multiline={true}
                                            onChangeText={text => setAddContent(text)}
                                            value={addContent}
                                        />
                                    </View>
                                    <View>
                                        {/* Button送出->要固定在下方 */}
                                        <Button style={{ backgroundColor: '#0080FF', height: 30, width: 50, justifyContent: 'center', alignItems: 'center' }}
                                            onPress={InsertComment}>
                                            <Text style={{ color: '#ffffff' }}>送出</Text>
                                        </Button>
                                    </View>
                                </View>
                            </Body>
                        </ListItem>
                    }
                />
            </KeyboardAwareScrollView>
            {/* </KeyboardAvoidingView> */}
>>>>>>> home
        </Container>
    )
}