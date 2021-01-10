import Icon from 'react-native-vector-icons/Ionicons';  
import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button , Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Fab } from 'native-base';
import { Picker } from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles';
import axios from 'axios';
import {axios_config, url} from '../Config';

export default function ReservationCheck({ route , navigation }) {
    const finalUrl = url + 'facility?filterByFormula=FacilityID+%3D+' + route.params.FacilityID;
    
    const [posts, setPost] = useState([]);
    // const [date, setDate] = useState(new Date());
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'ios');
    //     setDate(currentDate);
    // };

    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };

    // const showDatepicker = () => {
    //     showMode('date');
    // };

    // const showTimepicker = () => {
    //     showMode('time');
    // };

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
                    <Text>設施名稱：{item.fields.FacilityName}</Text>
                    <Text></Text>
                    <Text>
                        預計使用人數：
                        <Picker
                            selectedValue={'1'}
                            style={{height: 50, width: 100}}
                            onValueChange={(itemValue, itemIndex) => 
                            console.log('itemIndex:', itemIndex , ',  itemValue:', itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                        </Picker>
                    </Text>
                    {/* <Button onPress={showDatepicker}> */}
                        <Text>
                            預約日期：
                        </Text>
                    {/* </Button> */}
                    {/* {show && (
                        <DateTimePicker
                            testID="DatePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )} */}
                    {/* <Button onPress={showTimepicker}> */}
                        <Text>
                            預約時段：
                        </Text>
                    {/* </Button> */}
                    {/* {show && (
                        <DateTimePicker
                            testID="TimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )} */}
                </Body>
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
