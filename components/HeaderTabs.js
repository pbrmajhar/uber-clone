import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HeaderTabs = ({activeTab, setActiveTab}) => {
    return (
        <View>
            <View style={styles.buttonsWrapper}>
                <Buttons title="Delivery" active={activeTab} setActiveTab={setActiveTab} />
                <Buttons title="Pickup" active={activeTab} setActiveTab={setActiveTab} />
            </View>
        </View>
    )
}

const Buttons = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.active === props.title ? 'black' : 'white',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30
    }} onPress={() => props.setActiveTab(props.title)}>
        <Text style={{
            color: props.active === props.title ? 'white' : 'black',
            fontSize: 15,
            fontWeight: '900'
        }}>{props.title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    buttonsWrapper: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    button: {
        
        
    },
    buttonText: {
        
    }
})

export default HeaderTabs