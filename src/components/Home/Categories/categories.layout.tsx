import React from 'react'
import { Text } from 'react-native-paper'
import { Categorie } from '../../../assets/styles/home/categories'
export const renderItem = ({ item, i }) => {
    return (
        <Categorie key={i}>
            <Text>{item.title}</Text>
        </Categorie>
    )
}