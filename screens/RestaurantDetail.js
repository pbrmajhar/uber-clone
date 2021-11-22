import React from 'react'
import { View, Text } from 'react-native'
import About from '../components/restautantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restautantDetail/MenuItems'

export default function RestaurantDetail({route}) {
    return (
        <View>
            <About route={route} />
            <Divider width={1.5} style={{ marginVertical: 5 }} />
            <MenuItems />
        </View>
    )
}
