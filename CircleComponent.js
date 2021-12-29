import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



let gray = "#91A1BD"

const BACKGROUND = "#FFFFFF"
export default function CircleComponent(){
        
    return (
      <View style={{flex: 1}}>
        <View style={styles.bigcircle}>
      <View style={styles.CircleShape} >
           <Text style={{fontSize: 24, color: 'grey', fontWeight: 'bold'}}>Expenses</Text>
           <Text style={{fontSize: 32, color: "#000", fontWeight: 'bold'}}>₹10,400</Text>
           <Text  style={{fontSize: 12, color: 'grey', fontWeight: 'bold'}}>This month</Text>
      </View>
      </View>
      </View>
      
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      backgroundColor: BACKGROUND,
      justifyContent: 'center',
      alignItems: 'center'
    },
    neomorphism:{
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
    morphTop:{
      shadowOffset:{
        width: -6,
        height: -6
      },
      marginHorizontal: 20,
      borderRadius: 12,
      shadowOpacity: 3,
      shadowRadius:6 ,
      shadowColor: "red",
     
      
    },
    morphBottom:{
      
      borderRadius: 20,
      shadowOffset:{
        width: 6,
        height: 6
      },
      shadowOpacity: 6,
      shadowRadius: 6,
      shadowColor: "#EDEADE"
    },
    
    CircleShape: {
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 220,
      height: 220,
      borderRadius: 220/ 2,
      backgroundColor: '#FFF',
      borderColor: "#FFC931",
      borderWidth: 1,
      padding: 42
    },
    smallchircle:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 40/2,
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderColor: "#FFC933"
    },
    bigcircle:{
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 250,
      height: 250,
      borderRadius: 250/ 2,
      backgroundColor: '#FFF',
      padding: 10,
      shadowColor: "#F8F0E3",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 6,
      shadowRadius: 32,
      elevation: 12,
      
      
  
    },
    swipcontainer: {
      flex: 1,
    },
    slideContainer: {
      flex: 1,
     
    },
    slide1: {
      
    },
    slide2: {
      backgroundColor: 'rgba(20,200,20,0.3)',
    },
    slide3: {
      backgroundColor: 'rgba(200,20,20,0.3)',
    },
  
  });
  
  


