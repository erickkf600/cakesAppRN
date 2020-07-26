import * as React from 'react';
import { View, SafeAreaView } from 'react-native'
import { categoriesMock } from './../../../Mocks/categories'
import { styles } from '../../../assets/styles/home/categories'
import Carousel from 'react-native-snap-carousel'
import * as layout from './categories.layout'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

function HomeCarousel() {
    return (
        <SafeAreaView>
            <View style={styles.warapper}>
                <Carousel
                    layout={"default"}
                    data={categoriesMock}
                    sliderWidth={wp('90%')}
                    itemWidth={wp('20%')}
                    activeSlideAlignment="start"
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    containerCustomStyle={styles.container}
                    slideStyle={styles.slideItem}
                    renderItem={layout.renderItem} />
            </View>
        </SafeAreaView>
    )
}
export default HomeCarousel

