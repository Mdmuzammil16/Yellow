import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default function Test(){
    return(
        <View>
            <Image
            style={{height: 30, width: 30}}
            source={require('./assets/loyalty.svg')}/>
        </View>
    )
}
