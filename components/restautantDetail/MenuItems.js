import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import BouncyCheckBox from 'react-native-bouncy-checkbox'

const menus = [
    {
        name: 'Chicken Burger',
        description: 'Chicken Burger with Cheese',
        price: '$10',
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe-500x500.jpg'
    },
]

export default function MenuItems() {
    return (
        <View style={styles.screen}>
            <BouncyCheckBox
                iconStyle={{ borderRadius: 0, borderColor: 'black', borderWidth: 1 }}
                fillColor='black'
            />
            <FoodItem food={menus[0]} />
            <FoodImage food={menus[0]} />
        </View>
    )
}

const FoodItem = (props) => {
    return (
        <View style={styles.foodItem}>
            <Text style={styles.title}>{props.food.name}</Text>
            <Text>{props.food.description}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const FoodImage = (props) => {
    return (
        <View style={styles.foodImage}>
            <Image source={{ uri: props.food.image }}
                style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foodItem: {
        justifyContent: 'space-evenly',
        width: 240
    },
    title: {
        fontSize: 18,
        fontWeight: '700'
    },
    image:
    {
        height: 100,
        width: 100,
        borderRadius: 8
    }
})