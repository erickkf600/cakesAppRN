import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {  Text } from 'native-base';
import { TabItem, Tab} from './../assets/styles/tab'
import Icon from 'react-native-vector-icons/AntDesign';

const TabBar = (props) => {
    return (
        <LinearGradient 
            colors={['#FE9EA1', '#FACCC0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <Tab>
                <TabItem>
                    <Icon name="home" size={28} color="#fff" />
                </TabItem>
                <TabItem>
                    <Icon name="shoppingcart" size={28} color="#fff" />
                </TabItem>
                <TabItem>
                    <Icon name="user" size={28} color="#fff" />
                </TabItem>
            </Tab>
        </LinearGradient>
    );
}

export default TabBar;
