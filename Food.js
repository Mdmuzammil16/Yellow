import React, { Component } from 'react'
import { Text, View ,FlatList, TouchableOpacity, Image } from 'react-native';
import {  SimpleLineIcons, Ionicons , MaterialCommunityIcons , Feather,AntDesign,Entypo } from '@expo/vector-icons';
import DATA2 from './DATA2';
import { ScrollView } from 'react-native-web';
export default function Food() {
    
        return (
            <View style={{flex:1}}>
                 <View style={{ flexDirection:'row', justifyContent:'space-between',marginTop:20,marginHorizontal:20}} >
               <SimpleLineIcons name="bell" size={24} color="black" />
               <Text
               style={{fontSize:20,fontWeight:'600'}}>
                   Offers
               </Text>
               <Ionicons name="ios-heart-outline" size={24} color="black" />

           </View>
      <View style={{alignItems:'center'}}>
        
         <FlatList
         style={{paddingVertical: 10, paddingHorizontal: 20}}
            data={DATA2}
            renderItem={({item})=> (
            <View style={{ shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    alignItems:'center',
    justifyContent:'center',
    shadowOpacity: 0.5,
    shadowRadius: 12,
    width:"100%",
    height: null,
    padding:5,
    marginTop:20,  
    backgroundColor: 'white',
    elevation: 5,
    borderRadius:10,}} >
            <View style={{alignItems:'center',  }}>

            <View style={{marginHorizontal:5,}}>
            <Image
            resizeMode={'stretch'}
             source={{uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/E264/production/_116965975_gettyimages-639704020.jpg"}} style={{width:300, height: 180,borderRadius:10 }}/>
             </View>
           
           <View style={{marginTop:10,}}>
       
         <View style={{flexDirection:'row',alignItems: 'center'}}>
             <Image
               style={{height:40,width:40,borderRadius:10}}
               source={{uri:"https://www.oneindia.com/img/1200x80/2017/07/swiggy-19-1500443913.jpg"}}
             />
                   <View style={{flexDirection:'column',}}>
                  <Text style={{fontSize:13,fontWeight:'600'}} >  {item.title}</Text>
                  <Text style={{fontSize:13,fontWeight:'600',color:'#FFC931'}} >  {item.subtitle}</Text>
                   </View>
                      <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:120,alignItems:'center'}}>
                         <Ionicons name="heart" size={20} color='grey' />
                         <Entypo name="share" size={20} color="grey" />
                     </View>
                  </View>
                
             </View>
         </View>
     </View>
      )}
      keyExtractor={item => item.id}
    />
                       </View>


                </View>


                  
      
        );
   
}