import React from 'react'
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Head, styles, Search } from '../../assets/styles/home/home-header'
import { EvilIcons } from './../../assets/Icons/Icons'
function Header(props) {
    return (
        <Head>
            <Card style={styles.input} onPress={() =>  props.navigation.navigate('SearchPage') }>
                <Search>
                    <EvilIcons name="search" size={28} style={{color: "#999"}}/>
                    <Text style={{ marginLeft: 15, color: '#999' }}>Pesquisar...</Text>
                </Search>
            </Card>
        </Head>
    )
}
export default Header