import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, MyOrders, Profile, SearchPage } from './LazyImport'
import { KeyboardAvoidingView } from 'react-native';
import TabBar from './Tab-bar'
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const OrdesStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="Home" component={Home} options={{ title: '' }} />
            <HomeStack.Screen name="SearchPage" component={SearchPage} options={{ title: '' }} />

        </HomeStack.Navigator>
    )
}
const OrdesStackScreen = () => {
    return (
        <OrdesStack.Navigator>
            <OrdesStack.Screen name="MeusPedidos" component={MyOrders} options={{ title: '' }} />
            <OrdesStack.Screen name="SearchPage" component={SearchPage} options={{ title: '' }} />
        </OrdesStack.Navigator>
    )
}
const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Perfil" component={Profile} options={{ title: '' }} />
            <ProfileStack.Screen name="SearchPage" component={SearchPage} options={{ title: '' }} />
        </ProfileStack.Navigator>
    )
}
const MyTheme = {
    dark: false,
    colors: {
        background: 'rgb(255,255,255)',
    },
};
const Routing = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={MyTheme}>    
                    <Tab.Navigator
                        initialRouteName="Home"
                        tabBar={props => <TabBar {...props} />}
                    >
                    <Tab.Screen name="Home" component={HomeStackScreen}/>
                    <Tab.Screen name="MeusPedidos" component={OrdesStackScreen} />
                    <Tab.Screen name="Perfil" component={ProfileStackScreen} />
                    </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
export default Routing;


    
