import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomePage from './HomePage';
import { NavigationContainer } from '@react-navigation/native';
import Flat1 from './Reuse comp/TransactionRecord';

const Tab = createMaterialTopTabNavigator();

export default function Toptab () {

    return (
        <View style={{ flex: 1, flexDirection: 'row'}}>

      
        <NavigationContainer independent={true}>
                <Tab.Navigator screenOptions={{
                      tabBarLabelStyle: { fontSize: 12 },
    tabBarStyle: { backgroundColor: 'white', borderWidth: 1, borderColor: "#D3D3D3",
    borderRadius: 22, marginHorizontal: 12, marginVertical: 8 }, 
    
    tabBarIndicatorStyle:{backgroundColor: "#D3D3D3", borderRadius: 28, marginHorizontal: 22, width: "33%"},
    tabBarIndicatorContainerStyle:{borderRadius: 28}
  }}>
                    <Tab.Screen
                     name="Template" component={Flat1} 
                        
                     />
                    <Tab.Screen name="Offer" component={Flat1} />
                </Tab.Navigator>
        </NavigationContainer>
        </View>
      
    );
  
}

