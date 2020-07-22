import React from 'react'
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
function Home() {

    return (
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 35}}>Drawer Navgation</Text>
        </View>
    )
}

export default Home
