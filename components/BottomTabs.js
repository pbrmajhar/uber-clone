import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const BottomTabs = () => {
    return (
        <View style={styles.screen}>
            <TabItem name="home" title="Home"  />
            <TabItem name="search" title="Browse"  />
            <TabItem name="shopping-bag" title="Grocery"  />
            <TabItem name="save" title="Receipt"  />
            <TabItem name="user" title="Profile"  />
        </View>
    )
}

const TabItem = (prop) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={ () => alert('hello')}>
            <FontAwesome name={prop.name} size={25} color="black" style={styles.icon} />
            <Text style={styles.text}>{prop.title}</Text>
        </TouchableOpacity>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5,
        marginHorizontal: 10,
    },
    btn: {
        alignItems: 'center',
    },
    icon: {
    },
    text: {
        fontSize: 16,
    }
})
