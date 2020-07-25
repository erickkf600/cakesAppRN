import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView  } from 'react-native'

import Header from './../../shared/Home-Header/Header'
import Carousel from './../../components/Home/Carousel/Carousel'
// import HomeCarousel from './../../Components/Home/Carousel/Carousel'
function Home(props) {

    return (
        <SafeAreaView>
            <ScrollView style={{minHeight: 1000}}>
                <Header navigation={props.navigation}/>

                <Carousel />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
