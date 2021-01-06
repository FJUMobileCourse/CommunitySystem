import Icon from 'react-native-vector-icons/Ionicons';  
import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button , Image} from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Fab } from 'native-base';
import styles from '../styles';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
  BottomModal,
  ModalPortal,
} from 'react-native-modals';
import axios from 'axios';
import Moment from 'moment';
import {axios_config, url} from '../Config';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Reservation() {
    const finalUrl = url+'facility?maxRecords=30&view=Grid%20view';
    
    const [posts, setPost] = useState([]);
    // const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => (
        <Card>
            <CardItem bordered style={{backgroundColor: "#ACD6FF"}}>
                <Body>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Left>
                            <Text>設施名稱：{item.fields.FacilityName}</Text>
                        </Left>
                        <Right>
                            <Image 
                                source={{
                                    uri : item.fields.Picture[0].url
                                }}
                                style={{
                                    width: 200,
                                    height: 100,
                                }}
                            />
                        </Right>
                    </View>
                </Body>
             </CardItem>
             <CardItem header >
                <Body>
                    <Left>
                        <Text>設施資訊：</Text>
                        <Text>{item.fields.FacilityInfo}</Text>
                        <Text>開放時間：</Text>
                        <Text>{Moment(item.fields.OpeningTime).format('HH:mm')} - {Moment(item.fields.EndTime).format('HH:mm')}</Text>
                    </Left>
                    <Right>
                        <Button style={{
                                flex: 1 ,
                                // flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            title="我要預約"
                        />
                    </Right>
                </Body>
            </CardItem>
        </Card>
    )

    async function fetchData () {
        const result = await axios.get(finalUrl , axios_config);
        console.log(result.data);
        setPost(result.data.records)
    }

    useEffect(() => {
        fetchData();
    }, []);

    function AddFormVisibleOrNot() {
        setModalVisible(false);
    }

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
            </Content>   
        </Container>
    );
}
