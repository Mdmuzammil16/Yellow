import * as React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import Food from './Food';
import { ImageBackground } from 'react-native-web';
import Account from './Account';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
       
        headerShown: false,
        
        tabBarStyle:{
          height: 60,
          
          marginHorizontal: 16,
          backgroundColor: "#000",
          bottom: 20,
          
          backgroundColor: '#000',
          borderRadius: 16,
        
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'gray',
          
      }}>
        <Tab.Screen name="Home" component={HomePage} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
              <Image
              resizeMode='contain'
              style={{height: 20, width: 20, tintColor: focused? 'yellow' : 'grey'}}
              source={require('./assets/home.svg')}/>
              <Text style={{color: "#FFF", fontSize: 12,
            color: focused? 'yellow' : 'grey'}}>Home</Text>
            </View>
          )
        }}/>
        <Tab.Screen name="Loyalty" component={HomePage} 
        options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
              <Image
              resizeMode='contain'
              style={{height: 20, width: 20, tintColor: focused? 'yellow' : 'grey'}}
              source={require('./assets/loyalty.svg')}/>
              <Text style={{color: "#FFF", fontSize: 12,
            color: focused? 'yellow' : 'grey'}}>Loyalty</Text>
            </View>
          )
        }}/>
         <Tab.Screen name="Pay" component={Food} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
              <ImageBackground
              style={{height: 60, width: 60, alignItems: 'center', justifyContent: 'center'}}
              source={require('./assets/Ellipse 82.svg')}>

            <Text style={{color: "#000", fontSize: 20, fontWeight: 'bold'}}>Pay</Text>
                
              </ImageBackground>
            
            </View>
          )
        }}/>
        <Tab.Screen name="myapp" component={Food} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
              <Image
              resizeMode='contain'
              style={{height: 20, width: 20, tintColor: focused? 'yellow' : 'grey'}}
              source={require('./assets/offers.svg')}/>
              <Text style={{color: "#FFF", fontSize: 12,
            color: focused? 'yellow' : 'grey'}}>offers</Text>
            </View>
          )
        }}/>
        <Tab.Screen name="offer" component={Account} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
              <Image
              resizeMode='contain'
              style={{height: 20, width: 20, tintColor: focused? 'yellow' : 'grey'}}
              source={require('./assets/Profile.svg')}/>
              <Text style={{color: "#FFF", fontSize: 12,
            color: focused? 'yellow' : 'grey'}}>Profile</Text>
            </View>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator> 
    //     <Tab.Screen name="Home" component={HomeScreen}  />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}