import * as React from 'react';
import { View, SafeAreaView } from 'react-native'
import { carouselMock } from './../../../Mocks/carousel'
import { styles } from '../../../assets/styles/home/carousel'
import Carousel from 'react-native-snap-carousel'
import * as layout from './carousel.layout'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

function HomeCarousel() {
    return (
        <SafeAreaView>
            <View style={styles.warapper}>
                <Carousel
                    layout={"default"}
                    data={carouselMock}
                    sliderWidth={wp('100%')}
                    itemWidth={wp('80%')}
                    containerCustomStyle={styles.warapper}
                    loop={true}
                    renderItem={layout.renderItem} />
            </View>
        </SafeAreaView>
    )
}
export default HomeCarousel

