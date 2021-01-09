import Icon from 'react-native-vector-icons/Ionicons';  
import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button , Image} from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Fab } from 'native-base';
import styles from '../styles';
import axios from 'axios';
import {axios_config, url} from '../Config';

export default function ReservationCheck() {
    const finalUrl = url+'facility?maxRecords=30&view=Grid%20view';
    
    const [posts, setPost] = useState([]);

    const renderItem = ({ item }) => (
        <Card>
            <CardItem bordered style={{backgroundColor: "#ACD6FF"}}>
                <Body>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        
                            <Image 
                                source={{
                                    uri : item.fields.Picture[0].url
                                }}
                                style={{
                                    width: 150,
                                    height: 100,
                                }}
                            />
                    </View>
                </Body>
             </CardItem>
             <CardItem header >
                <Body>
                    <Text>設施名稱：{item.fields.FacilityName}</Text>
                    <Text></Text>
                    <Text>預計使用人數：</Text>
                    <Text>預約日期：</Text>
                    <Text>預約時段：</Text>
                        
                </Body>
            </CardItem>
        </Card>
    )

    async function fetchData () {
        const result = await axios.get(finalUrl , axios_config);
        console.log(result.data);
        setPost(result.data.records);
        console.log(result.data.OpeningTime.toTimeString())
    }

    useEffect(() => {
        fetchData();
    }, []);

//    function checkTime() {
//        if (num==0){
//            return "未領取";
//        }else if (num==1){
//             return "已領取"
//        }else{
//            return "異常，請聯絡管理員"
//        }
//    }

    return (
      
        <Container style={styles.container}>
            <Content style={styles.item}>
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    // keyExtractor={item => item.fields.Publisher}
                />
                <Button
                    style={{
                        flex: 1 ,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    title="確定預約"
                />
            </Content>   
        </Container>
    );
}
