 import Icon from 'react-native-vector-icons/Ionicons';  
import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button} from 'react-native';
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

export default function PackageNotReceived() {
    const finalUrl = url+'Package?maxRecords=30&view=Grid%20view';
    
    const [posts, setPost] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);  
    const [changeVisible, setChangeVisible] = useState(false);

    const renderItem = ({ item }) => (
        <Card>
            <CardItem bordered style={{backgroundColor: changeStatusColor(item.fields.PackageStatus)}}>
                
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
             
             <CardItem header bordered >
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
            
            <CardItem button onPress={() => setChangeVisible(true)}>

                <Right style={styles.comment}>
                    <Icon active name="paper" style={{ marginRight: 5 }} />
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

   function changeStatusColor(status){
     let color;
     if (status==0){
       color= "orange";
     }else if (status==1){
        color= "#00bfff";
     }else{
       color= "#ff4500";
     }
     return color;
     
   }

   function checkIdentify(){
       
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

