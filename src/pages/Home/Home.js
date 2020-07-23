import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

function Home() {

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 25 }}>After the package has installed, when application loads (in real device and/or emulator), it detects the screen's width and height. I.e. for Samsung A5 2017 model it detects width: 360DP and height: 640DP (these are the values without taking into account the device's scale factor).
                    The package exposes 2 basic methods: widthPercentageToDP and heightPercentageToDP. Their names essentially mean that you can supply a "percentage like" string value to each method and it will return the DP (indipendent pixel) that correspond to the supplied percentage of current screen's width/height respectivelly. I.e. for Samsung A5 2017, if we supply to a CSS box: width: widthPercentageToDP('53%'), the rendered style will be width: 190.8 DP. Check example number 1 for how to use them.
                    Methods widthPercentageToDP and heightPercentageToDP can be used for any style (CSS) property that accepts DP as value. DP values are the ones of type number over the props mentioned in RN docs: View style props, Text style props, Image style props, Layout props and Shadow props. Use the exposed methods for all of the type number properties used in your app in order to make your app fully responsive for all screen sizes.
                    You can also provide decimal values to these 2 methods, i.e. font-size: widthPercentageToDP('3.75%').
                    The package methods can be used with or without flex depending on what you want to do and how you choose to implement it.
                    The suggested approach is to start developing from larger screens (i.e. tablets). That way you are less prone to forget adding responsive values for all properties of type number. In any case, when your screen development is done, you should test it over a big range of different screens as shown below in the How do I know it works for all devices ? section.
                    There are 2 more methods to use if you want to support responsiveness along with orientation change. These are listenOrientationChange and removeOrientationListener. To see how to use them, check example number 3.
        You can use this package along with styled-components. To see how to do that, check example number 2.</Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home
