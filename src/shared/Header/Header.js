import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
function Header() {
    return (
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    tabItem: {
       position: 'relative',
       top: 0,
       width: '100%',
       padding: 15

    },
});
export default Header