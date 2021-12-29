import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { AntDesign, Feather, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import MerchantCustom from './MerchantCustom';
import Toptab from './Toptab';

const BACKGROUND = "#FFFFFF"
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3a12d53abb28ba',
    title: 'TV Subscription',
    mainimg: 'https://www.citypng.com/public/uploads/preview/-11594683197dyw1e3i6bz.png'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd9132aa97f63',
    title: 'Netflix SUbscription',
    mainimg: 'https://www.citypng.com/public/uploads/preview/-11594683197dyw1e3i6bz.png'
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455711e29d72',
    title: 'Merchant Name',
    mainimg: 'https://www.citypng.com/public/uploads/preview/-11594683197dyw1e3i6bz.png'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb3428ba',
    title: 'TV Subscription',
    mainimg: 'https://www.citypng.com/public/uploads/preview/-11594683197dyw1e3i6bz.png'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Netflix SUbscription',
    mainimg: 'https://www.citypng.com/public/uploads/preview/-11594683197dyw1e3i6bz.png'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Merchant Name',
    mainimg: 'https://www.citypng.com/public/uploads/preview/-11594683197dyw1e3i6bz.png'
  },
];



export default function (){

    return (
      <View style={{ height: "100%"}}>
      <View style={{backgroundColor: "#FFC933", height: "45%", paddingTop:32}}>

     
      <View style={{marginLeft: 22, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
        <Feather  name="arrow-left" size={24} color="white" />
      <Text style={{marginLeft: 12,fontWeight: 'bold',
      color: 'white', fontSize: 22}}>Merchant Details</Text>
        </View>
        <View style={{backgroundColor: "#FFF", marginRight: 22,
        height: 40, width: 40, alignItems: 'center', justifyContent:'center',
        borderRadius: 8
      }}> 
        <Image
        resizeMode='contain'
        style={{height: 20, width: 20}}
        source={require('./assets/Vector.svg')}/>
        </View>
     
      </View>


      <View style={{flexDirection: 'row', alignItems: 'center'}}>

          <Image
              style={{height: 90, width: 90,margin: 30, borderRadius: 22}}
              resizeMode={'contain'}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WhG7Lidw4obu6weesnlM-Q4v_-7D5HD_KubTCNRiLyLDMZx54McoqWt37T_zD7KCIdo&usqp=CAU'}}
          />

          <View>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Joseph Muller</Text>
              <View style={{flexDirection: 'row'}}>
              <Entypo name="star" size={24} color="white" />
              <Entypo name="star" size={24} color="white" />
              <Entypo name="star" size={24} color="white" />
              <Entypo name="star" size={24} color="white" />
              <Entypo name="star" size={24} color="white" />
              
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EvilIcons name="location" size={18} color="gray" />
              <Text style={{color: 'gray'}}>Shop No 11A, 2, Anupama</Text>
              </View>
              
          </View>
      </View>
       <View style={{alignItems: 'center', height: "26%"}}>
      <View style={{width: "48%", height: "100%", borderWidth: 1,
      borderTopEndRadius: 140,
      borderTopStartRadius: 140,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      borderColor: "#FFF", alignItems: 'center', justifyContent: 'center'
      }}>
            <Text style={{color: 'grey'}}>
                This Month
            </Text>
            <Text style={{color: "#000", fontWeight: 'bold',
            fontSize: 23}}>
               $ 10, 400
            </Text>
        </View>
       
       <View style={{borderWidth: 1, marginTop: 12,
        width: "60%",
        justifyContent: 'center',
        height: "40%",
         borderRadius: 20,}}>
            <View style={{flexDirection: 'row', 
            
            justifyContent: 'space-evenly',}}>
            
            <FontAwesome name="whatsapp" size={24} color="black" />
            <FontAwesome name="phone" size={24} color="black" />
            <AntDesign name="like1" size={24} color="black" />
            
            </View> 
       </View>
        
        </View>
        </View>
        <Toptab/>
        </View>

   
   

          

    );
  
}
