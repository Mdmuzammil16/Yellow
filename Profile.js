import React, { Component } from 'react'
import { Text, View , Image, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {  SimpleLineIcons, Ionicons , MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';


const BACKGROUND = "#88B04B";

const Morph = ({children}) => {
   return<View style={StyleSheet.morphtop}>{children}</View>
}

export default function Profile() {
    
        return (
            <View>
                <View style={{ flexDirection:'row', justifyContent:'space-between',marginTop:20,marginHorizontal:20,backgroundColor:'white'}} >
               <SimpleLineIcons name="bell" size={24} color="black" />
               <Morph>
               <Text
               style={{fontSize:20,fontWeight:'600',backgroundColor:'white'}}>
                   Profile
               </Text>
               </Morph>
               
               <Morph>
               <Ionicons name="ios-heart-outline" size={24} color="black" backgroundColor="white" />
               </Morph>
               

           </View>
        
                <View style={{alignItems:'center', marginTop:20}} >  
                <Image
                  source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCc2ULjz_BX_a91BvhR-9tXfknyrIDOoFGfQ&usqp=CAU"}}
                  style={{height:70,width:70,borderRadius:15}}
                  />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:25,alignItems:'flex-start'}} >
                <View style={{shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 2,
    width:40,
    height: 40,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
      
    backgroundColor: 'white',
    elevation: 5,
    borderRadius:20,}}>
                <Ionicons name="md-share-social" size={18} color="gray" />
                </View>
                
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,color:'#969692', marginTop:10}} >
                    Joseph Muller
                </Text>
                <View  style={{shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 2,
    width:40,
    height: 40,
    padding:10,
    alignItems:'center',
    justifyContent:'center',
      
    backgroundColor: 'white',
    elevation: 5,
    borderRadius:25,}}>
                <MaterialCommunityIcons name="qrcode-scan" size={18} color="gray" />
                </View>
                
                
                
                </View>

                    <SafeAreaView style={{alignItems:'center',justifyContent:'flex-start'}}>
                     
    <View style={styles.design } >
    <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
               <View style={{width:40, height: 40,borderRadius:4,backgroundColor:'#FFC931',
            alignItems: 'center', justifyContent: 'center'}}>
               <Feather name="user" size={24} color="white" />
               </View>
                   <Text style={{fontSize:16,fontWeight:'600',textAlign:'center',padding:5}} >  My Account</Text>
                  </View>
    </View>
    </View>
    <View style={styles.design } >
    <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{width:40, height: 40,borderRadius:4,backgroundColor:'#FFC931',
            alignItems: 'center', justifyContent: 'center'}}>
               <Image
               resizeMode='contain'
               style={{height: 24, width: 24}}
               source={require('./assets/Category.svg')}/>
               </View>
                   <Text style={{fontSize:16,fontWeight:'600',textAlign:'center',padding:5}} >Category</Text>
                  </View>
    </View>
    </View>
    <View style={styles.design } >
    <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{width:40, height: 40,borderRadius:4,backgroundColor:'#FFC931',
            alignItems: 'center', justifyContent: 'center'}}>
               <MaterialIcons name="payment" size={24} color="white" />
               </View>
                   <Text style={{fontSize:16,fontWeight:'600',textAlign:'center',padding:5}} >Payment Method</Text>
                  </View>
    </View>
    </View>
    <View style={styles.design } >
    <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{width:40, height: 40,borderRadius:4,backgroundColor:'#FFC931',
            alignItems: 'center', justifyContent: 'center'}}>
               <Feather name="settings" size={24} color="white" />
               </View>
                   <Text style={{fontSize:16,fontWeight:'600',textAlign:'center',padding:5}} >Settings</Text>
                  </View>
    </View>
    </View>
    <View style={styles.design } >
    <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{width:40, height: 40,borderRadius:4,backgroundColor:'#FFC931',
            alignItems: 'center', justifyContent: 'center'}}>
               <Feather name="settings" size={24} color="white" />
               </View>
                   <Text style={{fontSize:16,fontWeight:'600',textAlign:'center',padding:5}} >Help & Support</Text>
                  </View>
    </View>
    </View>
       
                     </SafeAreaView>

            </View>
           
        );
   
}


const styles = StyleSheet.create({

     morphtop:{
      shadowOffset:{
        width:-6,
        height:-6
      },
      shadowOpacity:1,
      shadowRadius:6,
      shadowColor: BACKGROUND

     },
     design:{
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 12,
      elevation: 2,
      width:300,
      height: 50,
      marginTop:25,
      padding:6,  
      backgroundColor: 'white',
      elevation: 5,
      borderRadius:10,
     }
     

});