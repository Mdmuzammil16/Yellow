import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';
import { AntDesign, Feather, Entypo, EvilIcons, FontAwesome5 } from '@expo/vector-icons';

export default function MerchantCustom (){

    return (
        <View style={{height: "100%", backgroundColor: "#FFF"}}>
             <View style={{height: "10%"}}>

       
<View style={{flex: 1, flexDirection: 'row'}}>
  <View style={{height: "100%", width: "80%",
  backgroundColor: "#343",  flexDirection: 'row',
  marginTop: 10,
   borderRadius: 30,borderWidth: 1,
   alignItems: 'center',
   paddingHorizontal: 6,
   justifyContent: 'space-between',
   }}>

      <Text style={{textAlignVertical: 'center',width: "70%",
      height: "90%",
      textAlign: 'center',
      fontSize: 18,
      padding: 4,
      borderRadius: 20,
      fontWeight: 'bold',
      backgroundColor: "#F2FF"}}>Transactions</Text>
      <Text style={{textAlignVertical: 'center',
      backgroundColor: 'red',
      height: "90%",
      textAlign: 'center',
      fontSize: 18,
      padding: 4,
      fontWeight: 'bold',
      backgroundColor: "#389",
      borderRadius: 20,
      width: "30%"}}>offer</Text>
  </View>


  <View style={{backgroundColor: "#432",marginTop: 10, width: "20%", height: "100%",
  justifyContent: 'center',
  alignItems: 'center'}}>
  <FontAwesome5 name="grip-lines" size={24} color="black" />
  </View>
 
  </View>
  
  </View>

  <Text>you</Text>
        </View>
       
    );
}
