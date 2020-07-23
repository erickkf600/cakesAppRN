import styled from 'styled-components/native'
import {  StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
//STYLED COMPONENTS
export const Tab = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 55px;
`;
export const TabItem = styled.View`
    background: transparent;
    box-shadow: none;
    border: none;
    display: flex;
    align-items: center;
    color: #fff;
`;

export const styles = StyleSheet.create({
    item: {
        width: wp('30%'),
        height: 50,
        flex: 1,
        justifyContent: 'center'

    },
});

export const icon = StyleSheet.create({
    inactive: {
        color: '#fff',

    },
});
