import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const RestaurentItems = ({ navigation, ...props }) => {

    return (
        <>
            {props.restaurants.map((restaurant, index) => (
                <TouchableOpacity
                    activeOpacity={0.9}
                    key={index}
                    onPress={() => navigation.navigate("RestaurantDetails", {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        rating: restaurant.rating,
                        reviews: restaurant.review_count,
                        categories: restaurant.categories,
                    })} >
                    <View style={styles.container}>
                        <View>
                            <Image style={styles.image} source={{ uri: restaurant.image_url }} />
                            <TouchableOpacity style={styles.icon}>
                                <MaterialCommunityIcons name="heart-outline" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detail}>
                            <View>
                                <Text style={styles.title}>{restaurant.name}</Text>
                                <Text style={styles.time}>50 - 50 min</Text>
                            </View>
                            <View style={styles.rating} >
                                <Text >5</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        position: 'relative',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        color: '#999',
    },
    rating: {
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default RestaurentItems;