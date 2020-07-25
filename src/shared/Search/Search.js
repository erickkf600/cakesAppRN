import React from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { EvilIcons } from './../../assets/Icons/Icons'
function Search(props) {
    return (
        <>
            <Searchbar
                placeholder="Pesquisar..."
                autoFocus={true}
                style={{backgroundColor: "#fff"}}
                placeholderTextColor="#999"
                icon={() => <EvilIcons name="chevron-left" size={35} style={{ color: "#999" }} />}
                onIconPress={() => props.navigation.goBack()}
            />
            <View style={{minHeight: 1000}}>
            </View>
        </>
    )
}

export default Search