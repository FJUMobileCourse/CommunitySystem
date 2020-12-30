
import React, { useState, Component, useEffect } from 'react';
import { FlatList , View , Text, Modal } from 'react-native';
import { Container , Header , Left , Body , Segment , Button , Title , Content , Icon} from 'native-base';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import { Icon } from 'react-native-elements'
import styles from '../styles';
// import AddPost from '../AddPost';
import axios from 'axios';
import Moment from 'moment';
import {axios_config, url} from '../Config';

export default function reservation({ navigation }) {
    return (
        <Container>
            <Segment>
                <Button 
                    first
                    // title="預約"
                >
                    <Icon name="calendar"/>
                    <Text>預約</Text>
                </Button>
                <Button 
                    last
                    // title="預約紀錄"
                >
                    <Icon name="list"/>
                    <Text>預約紀錄</Text>
                </Button>
            </Segment>
        </Container>
    );
}