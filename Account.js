import React, { Component } from 'react'
import { Text, View , Image, FlatList,TextInput,StyleSheet} from 'react-native';
import { Ionicons, AntDesign , Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableHighlight, TouchableOpacity } from 'react-native-web';


export default function Account (){
    
        return (
            <View>
         
            <View style={{flex: 1, flexDirection: 'row'}}>
             <View style={{ width:"10%",marginTop:10,marginLeft: 4}} >

            <AntDesign name="left" size={28} color="black" />
            </View>

            <View style={{width:"80%"}}>
            <Text style={{textAlign: 'center',fontSize:20,fontWeight:'600',marginTop:10}} >My Account</Text>
            </View>
            
            
             

            </View>
            <View style={{flexDirection:'row', justifyContent: 'center', width: "100%" }} >
            <View style={{alignItems: 'flex-end',justifyContent: 'center', width: "50%"}}>
            
            <Image

                    
                    source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCc2ULjz_BX_a91BvhR-9tXfknyrIDOoFGfQ&usqp=CAU"}}
                    style={{height:90,width:90,marginTop:30,borderRadius:15, marginRight: 40}}
                />
                </View>
             <View style={{justifyContent: 'flex-end'}}>
             <View style={{ marginTop:10,
             justifyContent: 'center', width:"50%", 
                            shadowColor: 'grey',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 12,
                            elevation: 2,
                            width: 40,
                            height: 40,
                            padding:10,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor: 'white',
                            elevation: 5,
                            borderRadius:20,}} >

                    <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
             </View>
             </View>
             


           
            </View>
            

            <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center',color:'#FFC931', marginTop:10, marginRight: 30}} >
                    Joseph Muller
                </Text>
                <Text style={{fontWeight:'bold', fontSize:10, textAlign:'center',color:'#969692',marginTop:10, marginRight: 30}} >
                    ID : 5764388553
                </Text>

                <View style={{marginTop:15,justifyContent:'center',alignItems:'center'}} >
                    <TextInput
                        style={styles.container}
                        placeholder="Register Mobile No."
                    />
                     <TextInput
                        style={styles.container}
                        placeholder="Email ID (opyional)"
                    />
                     <TextInput
                        style={styles.container}
                        placeholder="Location"
                    />
                     <TextInput
                        style={styles.container}
                        placeholder="Birthday"
                    />
                     <TextInput
                        style={styles.container}
                        placeholder="Gender"
                    />
                </View>
                <View style={{ marginHorizontal:10,marginTop:20}} >
               <TouchableOpacity  >
               <View style={{flexDirection:'row',backgroundColor:'#FFC931',borderRadius:12,padding:15,alignItems:'center',justifyContent:'center',marginHorizontal:20}} >
               <View style={{marginRight:10}} >
               <Feather name="log-out" size={20} color="black" />
               </View>
               <View style={{}} >
               <Text style={{fontSize:15,fontWeight:'600',flexDirection:'row'}} >Logout</Text>
               </View>
               
               </View>
               
               </TouchableOpacity>
             </View> 
                
             </View>

        );
        }

        const styles = StyleSheet.create({

            container:{
        
            fontWeight:'600',
         shadowColor: 'grey',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.5,
            shadowRadius: 12,
                                 
            width:300,
         height: 40,
                                 marginTop:25,
            padding:15,
         backgroundColor: 'white',
         elevation: 5,
            borderRadius:12,
            }
        
        });