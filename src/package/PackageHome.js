import React, { useState, Component, useEffect } from 'react';
import { FlatList, View, Text, Button, Modal } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Icon, Thumbnail, Fab } from 'native-base';
import styles from '../styles';
import AddPost from './PackageDetail';
import axios from 'axios';
import Moment from 'moment';
import {axios_config, url} from '../Config';

export default function Index ({ Navigator }) {

    return (
        
        <View>
            <View style={{width:'100%', padding:10,height:100,backgroundColor:'grey'}}>
                
                    <Text style={{width:'50%', color:'white', fontSize:'30px', textAlign:'center', alignSelf:'flex-start'}}>待領取包裹</Text>
            
            
                    <Text style={{width:'50%', color:'white', fontSize:'30px', textAlign:'center', alignSelf:'flex-end'}}>5</Text>
            
            </View>
        </View>

        




       
    )
}
