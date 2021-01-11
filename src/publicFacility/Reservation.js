import Icon from 'react-native-vector-icons/Ionicons';  
import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text , Image ,  Button} from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Fab } from 'native-base';
import moment from 'moment'
import styles from '../styles';
import axios from 'axios';
import {axios_config, url} from '../Config';

export default function Reservation({ navigation }) {
    const finalUrl = url + 'facility?maxRecords=30&view=Grid%20view';
    
    const [data, setData] = useState([]);
    const [currentTime , setCurrentTime] = useState('');
    useEffect(() => {
        var Time = moment()
                    .utcOffset('+08:00')
                    .format('hh:mm');
        setCurrentTime(Time);
    }, []);

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
                                width: 350,
                                height: 250,
                            }}
                        />
                    </View>
                </Body>
             </CardItem>
             <CardItem header >
                <Body>
                    <Left>
                        <Text>設施名稱：{item.fields.FacilityName}</Text>
                        <Text></Text>
                        <Text>設施資訊：</Text>
                        <Text>{item.fields.FacilityInfo}</Text>
                        {currentTime < item.fields.OpeningTime && currentTime > item.fields.EndTime
                            ?
                            <Text style={{ flex: 2,  textAlign: 'right'}}>
                                設施狀態：
                                <Text style={{color: "#FF0000"}}>關閉中</Text>
                            </Text>
                            :
                            <Text>
                                設施狀態：
                                <Text style={{color: "#01814A"}}>開放中</Text>
                            </Text>
                        }
                    </Left>
                    <Right>
                        <Text/>
                        <Button 
                            style={{
                                flex: 1 ,
                                // flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'black' , 
                                borderRadius: 5
                            }}
                            type="outline"
                            title="前往預約"
                            onPress={() => GoToReservationInfo(item.fields.FacilityID)}
                        />
                    </Right>
                </Body>
            </CardItem>
        </Card>
    )

    async function fetchData () {
        const result = await axios.get(finalUrl , axios_config);
        // console.log(result.data);
        setData(result.data.records);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function GoToReservationInfo(id) {
        navigation.navigate('ReservationInfo' , { FacilityID: id });
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
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.fields.FacilityID}
                />
            </Content>   
        </Container>
    );
}
