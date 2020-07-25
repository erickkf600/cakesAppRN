import React from 'react'
import { Text } from 'react-native-paper'
import { Slide } from '../../../assets/styles/home/carousel'

export const renderItem = ({ item, i }) => {
    return (
        <Slide key={i}>
            <Text>{item.title}</Text>
            <Text>{item.text}</Text>
        </Slide>
    )
}