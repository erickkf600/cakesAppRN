import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from './LazyImport'
import { MyOrders} from './LazyImport'
import {Profile} from './LazyImport'

import TabBar from './Tab-bar'
const Tab = createBottomTabNavigator();

const Routing = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>    
                    <Tab.Navigator
                        initialRouteName="Home"
                        tabBar={props => <TabBar {...props} />}>
                        <Tab.Screen name="Home" component={Home} options={{ title: '' }}/>
                        <Tab.Screen name="MeusPedidos" component={MyOrders}  options={{ title: '' }} />
                        <Tab.Screen name="Perfil" component={Profile}  options={{ title: '' }}/>
                    </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
export default Routing;


    
