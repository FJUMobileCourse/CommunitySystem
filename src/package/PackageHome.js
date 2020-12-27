import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button, Modal } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, Fab } from 'native-base';
import styles from '../styles';

import axios from 'axios';
import Moment from 'moment';
import {axios_config, url} from '../Config';

export default function Index({ navigation }) {
    const finalUrl = url+'Package?maxRecords=30&view=Grid%20view';
    
    const [posts, setPost] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);  


    const renderItem = ({ item }) => (
        <Card>
            <CardItem bordered style={{backgroundColor: 'orange'}}>
                
                <Body>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Left style={{maxWidth:'20%'}}>
                            <Text>{item.fields.PackageType}</Text>
                        </Left>
                        <Right>
                        <Text>包裹狀態: {checkStatus(item.fields.PackageStatus)}</Text>
                        
                        
                        </Right>
                    </View>
                </Body>
    
             </CardItem>
             {/* 到時候導到PostDetail要隨著點擊的文不同，而導去不同的頁面 */}
             <CardItem header bordered button onPress={() => navigation.navigate('PackageDetail')}>
                <Body>
                    <Text>收件人: {item.fields.ReceiveName} </Text>
                    <Text></Text>
                    <Text>快遞編號: {item.fields.PackageNumber}</Text>
                    <Text></Text>
                    <Text>送達時間: {Moment(item.fields.ReceiveTime).format('YYYY-MM-DD HH:mm')}</Text>
                    <Text></Text>
                    <Text>最後取件時間: {Moment(item.fields.ReturnDate).format('YYYY-MM-DD')}</Text>  
                </Body>
            </CardItem>
            {/* 到時候導到PostDetail要隨著點擊的文不同，而導去不同的頁面 */}
            <CardItem button onPress={() => navigation.navigate('PackageDetail')}>
                <Right style={styles.comment}>
                    <Icon active name="chatbubbles" style={{ marginRight: 5 }} />
                </Right>
                <Text>寄件人: {item.fields.SendName} </Text>
                <Text></Text>
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

   function checkStatus(num) {
       if (num==0){
           return "未領取";
       }else if (num==1){
            return "已領取"
       }else{
           return "異常，請聯絡管理員"
       }
   }


    return (
        <Container style={styles.container}>
            <Content style={styles.item}>
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={item => item.fields.Publisher} />
            </Content>

            
        </Container>
    );
}
