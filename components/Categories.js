import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'

const catItems = [
    {
        image: require('../assets/images/fast-food.png'),
        title: 'Fast Food'
    },
    {
        image: require('../assets/images/bread.png'),
        title: 'Bread'
    },
    {
        image: require('../assets/images/shopping-bag.png'),
        title: 'Pick-up'
    },
    {
        image: require('../assets/images/fast-food.png'),
        title: 'Fast Food'
    },
    {
        image: require('../assets/images/fast-food.png'),
        title: 'Fast Food'
    },
    {
        image: require('../assets/images/fast-food.png'),
        title: 'Fast Food'
    },
    {
        image: require('../assets/images/fast-food.png'),
        title: 'Fast Food'
    },
    {
        image: require('../assets/images/fast-food.png'),
        title: 'Fast Food'
    }
]

const Categories = () => {
    return (
        <View style={styles.catWrap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {catItems.map((cat, index) => (
                    <View style={styles.catItems} key={index} >
                        <Image source={cat.image}
                            style={styles.image} />
                        <Text style={styles.title}>{cat.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    catWrap: {
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 5
    },
    catItems: {
        alignItems: 'center',
        marginRight: 25
    },
    image: {
        width: 50,
        height: 40,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 13, 
        fontWeight: "700"
    }
})
