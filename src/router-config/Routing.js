import React from 'react'
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
                        <Tab.Screen name="Home" component={Home} />
                        <Tab.Screen name="Meus Pedidos" component={MyOrders} />
                        <Tab.Screen name="Perfil" component={Profile} />
                    </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
export default Routing;


    
