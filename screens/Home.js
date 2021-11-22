import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import axios from 'axios'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import RestaurentItems, { localRestaurents } from '../components/RestaurentItems'
import BottomTabs from '../components/BottomTabs'
import { Divider } from 'react-native-elements'

const Home = ({navigation}) => {

    const [restaurants, setRestaurants] = useState([]);
    const [city, setCity] = useState("San Francisco")
    const [activeTab, setActiveTab] = useState("Delivery")

    const YELP_API_KEY = ""

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&limit=10`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return axios.get(yelpUrl, apiOptions)
            .then(res => {
                setRestaurants(
                    res.data.businesses.filter(
                        businesse => businesse.transactions.includes(
                            activeTab.toLowerCase()
                        )
                    )
                )
            }).catch(err => console.log(err))
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);


    return (
        <SafeAreaView style={{ paddingTop: 35, backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: '#fff', padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurentItems restaurants={restaurants} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <View>
                <BottomTabs />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
