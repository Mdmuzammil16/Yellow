import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons, AntDesign, EvilIcons, Entypo, Feather , MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colord } from "colord";
import Swiper from 'react-native-web-swiper';
import Swip from './Swip'
import Flat1 from './Reuse comp/TransactionRecord';

let gray = "#91A1BD"

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

export default function HomePage() {
  const Morph =({children})=>{
    return(
      <View style={{flex: 1,marginTop: 15,  justifyContent: 'center'}}>

    
      <View style={styles.morphTop}>
      <View style={styles.morphBottom}>
      {children}
      </View>
      </View>
      </View>

     
    )
    
    
  }
  return (
   
 <View style={{flex: 1, backgroundColor: '#FFF'}}>
 
   <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32,
   marginHorizontal: 20, alignItems: 'center'}}>
   <Feather name="bell" size={24} color="black" />
     <Text style={{fontWeight: 'bold', fontSize: 22, color: "#FFC931"}}> Yelow </Text>
     <Feather name="heart" size={24} color="black" />
   </View>

    <View style={{flex: 1.8}}>
    <Swip/>
    </View>
   

 {/* <View style={{alignItems: 'center'}}>
 <View style={styles.bigcircle}>
   <View style={styles.CircleShape} >
        <Text style={{fontSize: 20, color: 'grey', fontWeight: 'bold'}}>Expenses</Text>
        <Text style={{fontSize: 40, color: "#000", fontWeight: 'bold'}}>₹10,400</Text>
        <Text  style={{fontSize: 14, color: 'grey', fontWeight: 'bold'}}>This month</Text>
   </View>
   </View>
 </View> */}
 
  
   


    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40}}>

<View style={{alignItems: 'center', marginTop: 2}} >

<View style={styles.smallchircle}>
<MaterialIcons name="payment" size={24} color="gray" />
</View>


<Text style={{color: 'gray',marginTop: 2,fontFamily: 'Prompt-Regular',
}}>Payment</Text>

</View>

<View style={{alignItems: 'center'}} >
<View style={styles.smallchircle}>
<Image
style={{height: 20, width: 20}}
source={require('./assets/Vector.png')}/>
</View>
<Text style={{color: 'gray', marginTop: 2, fontFamily: 'Prompt-Regular',}}>Category</Text>

</View>

</View>




   
  
   <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, alignItems: 'center'}}>
     <Text style={{fontSize: 19, fontWeight: 'bold'}}>Recent Transactions</Text>
     <Text style={{color: 'grey'}}>See All {'>'}</Text>
   </View>
  
   <Flat1/>

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
    margin: 12,
    padding: 42
  },
  smallchircle:{
    
    justifyContent: 'center',
    alignItems: 'center',
    width: 41,
    height: 41,
    borderRadius: 41/2,
    backgroundColor: "#FFF",
    shadowColor: "grey",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 3,
    shadowRadius: 8,
    elevation: 32,
  },
  bigcircle:{
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 250,
    height: 250,
    borderRadius: 250/ 2,
    backgroundColor: '#FFF',
    borderColor: "#FFC931",
    borderWidth: 1,
    
    

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
