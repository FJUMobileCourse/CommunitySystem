import Icon from 'react-native-vector-icons/Ionicons';  
import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button , Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Fab } from 'native-base';
import { Picker as Select } from '@react-native-community/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles';
import axios from 'axios';
import {axios_config, url} from '../Config';
import { TextInput } from 'react-native-gesture-handler';
import CalendarList from 'react-native-calendar-list';

export default function ReservationCheck({ route , navigation }) {
    const finalUrl = url + 'facility?filterByFormula=FacilityID+%3D+' + route.params.FacilityID;
    
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
                                    width: 350,
                                    height: 250,
                                }}
                            />
                    </View>
                </Body>
             </CardItem>
             <CardItem>
                <Body>
                    <Text>設施名稱：{item.fields.FacilityName}</Text>
                    <Text></Text>
                    <Text>預計使用人數：</Text>
                    <Select
                        selectedValue={'1'}
                        style={{height: 30, width: 150}}
                        onValueChange={(itemValue, itemIndex) => 
                        console.log('itemIndex:', itemIndex , ',  itemValue:', itemValue)}
                    >
                        <Select.Item label="1" value="1" />
                        <Select.Item label="2" value="2" />
                        <Select.Item label="3" value="3" />
                        <Select.Item label="4" value="4" />
                        <Select.Item label="5" value="5" />
                        <Select.Item label="6" value="6" />
                        <Select.Item label="7" value="7" />
                        <Select.Item label="8" value="8" />
                    </Select>
                </Body>
            </CardItem>
            <CardItem>
                <Text>
                    預約日期：
                    <CalendarList
                        // Enable horizontal scrolling, default = false
                        horizontal={true}
                        // Enable paging on horizontal, default = false
                        pagingEnabled={true}
                        // Set custom calendarWidth.
                        calendarWidth={320}
                    />
                </Text>
                <Text/>
            </CardItem>
            <CardItem>
                <Text>
                    預約時段：
                    <TextInput></TextInput>
                </Text>
                <Text/>
            </CardItem>
            <CardItem>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Button
                        style={{
                            flex: 1 ,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        title="確定預約"
                    />
                </View>
            </CardItem>
        </Card>
    )

    async function fetchData () {
        const result = await axios.get(finalUrl , axios_config);
        setPost(result.data.records);
        console.log(result.data);
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
                    keyExtractor={item => item.fields.FacilityID}
                />
            </Content>   
        </Container>
    );
}
