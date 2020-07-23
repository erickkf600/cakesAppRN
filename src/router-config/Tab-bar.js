import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { TabItem, Tab, styles, icon} from './../assets/styles/tab'
import { Ionicons, FontAwesome} from './../assets/Icons/Icons'
import { TouchableRipple } from 'react-native-paper';
const TabBar = (props) => {
    console.log(props.state.index)
    return (
        <LinearGradient 
            colors={['#FE9EA1', '#FACCC0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <Tab>

                <TouchableRipple rippleColor="#FE9EA1" onPress={() => { props.navigation.navigate('Home') }} style={styles.item} transparent>
                    <TabItem>
                        {props.state.index === 0 ? 
                            <Ionicons name="ios-home-sharp" size={28} style={icon.inactive} />
                            : 
                            <Ionicons name="ios-home-outline" size={26} style={icon.inactive} />
                        }
                    </TabItem>
                </TouchableRipple> 

                <TouchableRipple rippleColor="#FE9EA1" onPress={() => { props.navigation.navigate('MeusPedidos') }} style={styles.item} transparent>
                    <TabItem>
                        {props.state.index === 1 ?
                            <Ionicons name="ios-cart" size={33} style={icon.inactive} />
                            :
                            <Ionicons name="ios-cart-outline" size={30} style={icon.inactive} />
                        }
                    </TabItem>
                </TouchableRipple>

                <TouchableRipple rippleColor="#FE9EA1" onPress={() => { props.navigation.navigate('Perfil') }} style={styles.item} transparent>
                    <TabItem>
                        {props.state.index === 2 ?
                            <FontAwesome name="user" size={33} style={icon.inactive} />
                            :
                            <FontAwesome name="user-o" size={25} style={icon.inactive} />
                        }
                    </TabItem>
                </TouchableRipple>
            </Tab>
        </LinearGradient>
    );
}

export default TabBar;
