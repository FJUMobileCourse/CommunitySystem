import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, List, ListItem, Item, Input, Button } from 'native-base';
import styles from '../styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import OptionsMenu from 'react-native-option-menu';
import { axios_config, url } from '../Config';
import axios from 'axios';
import Moment from 'moment';

export default function PostDetail({ route, navigation }) {
    const MoreIcon = require('../image/more-menu.jpg');

    const [posts, setPosts] = useState(null);
    const [comments, setCommemts] = useState([]);
    const getPostUrl = url + 'Forum/' + route.params.itemId;
    var getCommentUrl;

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

    //刪除留言後要重新fetchComment
    // useEffect(() => {
    //     fetchComment();
    // }, [comments])

    const renderItem = (data, rowMap) => (
        <View>
            <ListItem avatar style={styles.rowFront} onPress={() => rowMap[data.item.fields.CommentID].closeRow()}>
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
            console.log(resultOfComment.data.records);
            setCommemts(resultOfComment.data.records);
        }
        catch (e) {
            console.log('error:' + e)
        }
    }

    function EditPost() {
        navigation.navigate('EditPost');
    }

    async function DeletePost() {
        //alert("刪除貼文");
        await axios.delete(getPostUrl, axios_config)
            .then(
                navigation.navigate('Forum')
            )
            .catch(error => console.log(error))
    }

    return (
        <Container style={styles.view}>
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
                rightOpenValue={-75}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                closeOnRowPress={true}
                disableRightSwipe={true}
                ListFooterComponent={
                    <ListItem avatar>
                        <Body>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Input style={{ fontSize: 15 }}
                                    placeholder="請寫下你的留言…"
                                    multiline={true} />
                                {/* Button送出->要固定在下方 */}
                                <Button style={{ backgroundColor: '#0080FF', width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#ffffff' }}>送出</Text>
                                </Button>
                            </View>
                        </Body>
                    </ListItem>
                }
            />
        </Container>
    )
}