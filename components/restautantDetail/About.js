import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function About(props) {

    const { name, image, price, reviews, rating, categories } = props.route.params;
    const categoriesArr = categories.map((cat) => cat.title).join(' . ')

    return (
        <View>
            <Image source={{ uri: image }} style={{ width: '100%', height: 250 }} />
            <View style={{ justifyContent: 'flex-end', padding: 5 }}>
                <Text style={{ fontSize: 28, color: 'black', fontWeight: '700' }}>{name}</Text>
                <Text>
                    {categoriesArr + " . "}
                    {price ? price : ''}
                    {" . "}
                    <FontAwesome name="star" size={15} color="black" />
                    {" . " + rating + " . " + reviews}
                </Text>
            </View>
        </View>
    )
}
