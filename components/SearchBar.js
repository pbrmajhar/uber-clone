import React from "react";
import {View, StyleSheet, Text} from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {Ionicons} from '@expo/vector-icons'

const SearchBar = ({setCity}) => {
    return (
        <View style={{marginTop: 15, flexDirection: 'row'}}>
            <GooglePlacesAutocomplete 
            query={{key: 'AIzaSyCBrQFOOO2v-77txsiKcFLW28Fb75GjwFI'}}
            onPress={(data, details = null) => {
                const city = data.description.split(',')[0];
                console.log(city);
                setCity(city);
            }}
            placeholder="Search"
            styles={{
                textInput: {
                    backgroundColor: '#eee',
                    borderRadius: 70,
                    marginTop: 5,
                    fontWeight: '700'
                },
                textInputContainer: {
                    flexDirection: 'row',
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    alignItems: 'center',
                    paddingHorizontal: 5
                }
            }}
            renderLeftButton={() => (
                <View>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchBar