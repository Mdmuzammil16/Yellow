import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons, AntDesign, EvilIcons, Entypo, Feather , MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { colord } from "colord";
import HomePage from './HomePage';
import Swip from './Swip';
import CircleComponent from './CircleComponent';
import MerchantDetail from './MerchantDetail';
import MerchantCustom from './MerchantCustom';
import Toptab from './Toptab';
import Food from './Food'
import Profile from './Profile';
import Account from './Account';
import Flat1 from './Flat1';
import CustomBottombar from './CustomBottombar'
import Test from './Test';


let gray = "#91A1BD"

const BACKGROUND = "#FFFFFF"
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
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

export default function App() {
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
  
   <Profile/>
   
    
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
    borderColor: "#FFC931",
    borderWidth: 1,
    
    

  }

});
