import * as React from 'react';
import { View, Text, FlatList, Image, ImageBackground, processColor } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  {
  Svg,
  Use,
  Path
  
} from 'react-native-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import Food from './Food';

import Account from './Account';
import Profile from './Profile';
import MerchantDetail from './MerchantDetail';



const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
       
        headerShown: false,
        
        tabBarStyle:{
          height: "8.2%",
          
          marginHorizontal: 16,
          backgroundColor: "#000",
          marginBottom: 20,
         alignContent: 'center',
         justifyContent: 'center',
         
          paddingVertical: 12,
          paddingBottom: 8,
          justifyContent: 'space-evenly',
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
               <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
     
      height="23"
      fill= {focused? 'yellow': "none"}
      
      viewBox="0 0 28 16"
    >
      <Path
      
       d="M18.6393 17.6323V10.6754C18.6393 10.1914 18.5406 9.71243 18.349 9.26793C18.1575 8.82343 17.8773 8.4227 17.5254 8.09031L10.9712 1.89613C10.6411 1.58405 10.2041 1.41016 9.74982 1.41016C9.29554 1.41016 8.8585 1.58405 8.5284 1.89613L1.9742 8.09031C1.62238 8.4227 1.34212 8.82343 1.15059 9.26793C0.959063 9.71243 0.8603 10.1914 0.860352 10.6754V17.6323C0.860352 18.1038 1.04766 18.556 1.38108 18.8894C1.7145 19.2228 2.16672 19.4102 2.63824 19.4102H16.8614C17.3329 19.4102 17.7851 19.2228 18.1185 18.8894C18.452 18.556 18.6393 18.1038 18.6393 17.6323Z" stroke="#8B8B8B" stroke-linecap="round" stroke-linejoin="round">

      </Path>

    </Svg>
              <Text style={{color: "#FFF", fontSize: 12,
            color: focused? 'yellow' : 'grey'}}>Home</Text>
            </View>
          )
        }}/>
        <Tab.Screen name="Loyalty" component={MerchantDetail} 
        options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
             <Svg width="23" height="23" viewBox="0 0 23 23" fill={focused? 'yellow': 'gray'} xmlns="http://www.w3.org/2000/svg">
<Path d="M7.23163 12.4704C6.64585 11.8846 6.64585 10.9349 7.23163 10.3491L10.6889 6.89179C11.2747 6.306 12.2245 6.306 12.8102 6.89179L16.2675 10.3491C16.8533 10.9349 16.8533 11.8846 16.2675 12.4704L12.8102 15.9277C12.2245 16.5135 11.2747 16.5135 10.6889 15.9277L7.23163 12.4704Z" stroke="#8B8B8B"/>
<Path d="M11.75 1.98158C13.6148 1.98158 15.4377 2.53456 16.9882 3.57059C18.5388 4.60661 19.7472 6.07915 20.4609 7.802C21.1745 9.52484 21.3612 11.4206 20.9974 13.2496C20.6336 15.0785 19.7356 16.7586 18.417 18.0772C17.0984 19.3958 15.4184 20.2938 13.5894 20.6576C11.7605 21.0214 9.86469 20.8346 8.14185 20.121C6.419 19.4074 4.94646 18.1989 3.91043 16.6484C2.87441 15.0979 2.32143 13.2749 2.32143 11.4102C2.32434 8.91044 3.31864 6.51393 5.08621 4.74636C6.85378 2.97879 9.25029 1.9845 11.75 1.98158ZM11.75 0.410156C9.57441 0.410156 7.44767 1.05529 5.63873 2.26399C3.82979 3.47269 2.41989 5.19065 1.58733 7.20064C0.754766 9.21062 0.536929 11.4224 0.961367 13.5561C1.3858 15.6899 2.43345 17.65 3.97183 19.1883C5.51021 20.7267 7.47022 21.7744 9.60401 22.1988C11.7378 22.6232 13.9495 22.4054 15.9595 21.5728C17.9695 20.7403 19.6875 19.3304 20.8962 17.5214C22.1049 15.7125 22.75 13.5857 22.75 11.4102C22.75 8.49277 21.5911 5.69488 19.5282 3.63198C17.4653 1.56908 14.6674 0.410156 11.75 0.410156Z" fill="#8B8B8B" stroke="#333333" stroke-width="0.5"></Path>
</Svg>

              <Text style={{color: "#FFF", fontSize: 12,
            color: focused? 'yellow' : 'grey'}}>Loyalty</Text>
            </View>
          )
        }}/>
         <Tab.Screen name="Pay" component={Account} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
            <View style={{height: 40, width: 40, borderRadius: 40/2,
            backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: "#000"}}>Pay</Text>
            </View>
            
            </View>
          )
        }}/>
        <Tab.Screen name="myapp" component={Food} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
              <Svg width="23" height="23" viewBox="0 0 20 20" fill="none"  xmlns="http://www.w3.org/2000/svg">
<Path d="M11.25 2.08724L10.8751 2.41811C10.882 2.42589 10.8891 2.43346 10.8964 2.4408L11.25 2.08724ZM18.0729 11.9102L17.742 11.5353C17.7343 11.5422 17.7267 11.5493 17.7194 11.5566L18.0729 11.9102ZM18.25 9.08724L18.6249 8.75638C18.618 8.7486 18.6109 8.74103 18.6036 8.73369L18.25 9.08724ZM8.42709 18.9102L8.07353 19.2637C8.08087 19.271 8.08844 19.2782 8.09622 19.285L8.42709 18.9102ZM11.0729 18.9102L11.4038 19.285C11.4116 19.2782 11.4191 19.271 11.4265 19.2637L11.0729 18.9102ZM1.42709 11.9102L1.78064 11.5566L1.76963 11.5456L1.75795 11.5353L1.42709 11.9102ZM4.75 4.91016C4.47386 4.91016 4.25 5.13401 4.25 5.41016C4.25 5.6863 4.47386 5.91016 4.75 5.91016V4.91016ZM4.76 5.91016C5.03614 5.91016 5.26 5.6863 5.26 5.41016C5.26 5.13401 5.03614 4.91016 4.76 4.91016V5.91016ZM1.25 5.41016C1.25 3.47716 2.817 1.91016 4.75 1.91016V0.910156C2.26472 0.910156 0.25 2.92487 0.25 5.41016H1.25ZM1.25 10.4102V5.41016H0.25V10.4102H1.25ZM4.75 1.91016H9.75V0.910156H4.75V1.91016ZM9.75 1.91016C10.1979 1.91016 10.5995 2.10587 10.8751 2.41811L11.6249 1.75638C11.1675 1.23819 10.4968 0.910156 9.75 0.910156V1.91016ZM18.25 10.4102C18.25 10.8581 18.0543 11.2597 17.742 11.5353L18.4038 12.285C18.922 11.8277 19.25 11.1569 19.25 10.4102H18.25ZM17.8751 9.41811C18.1088 9.68284 18.25 10.0294 18.25 10.4102H19.25C19.25 9.77647 19.0136 9.19678 18.6249 8.75638L17.8751 9.41811ZM9.75 18.9102C9.36924 18.9102 9.02268 18.7689 8.75795 18.5353L8.09622 19.285C8.53663 19.6737 9.11631 19.9102 9.75 19.9102V18.9102ZM10.742 18.5353C10.4773 18.7689 10.1308 18.9102 9.75 18.9102V19.9102C10.3837 19.9102 10.9634 19.6737 11.4038 19.285L10.742 18.5353ZM1.75795 11.5353C1.44572 11.2597 1.25 10.8581 1.25 10.4102H0.25C0.25 11.1569 0.578037 11.8277 1.09622 12.285L1.75795 11.5353ZM10.8964 2.4408L17.8964 9.4408L18.6036 8.73369L11.6036 1.73369L10.8964 2.4408ZM8.78064 18.5566L1.78064 11.5566L1.07353 12.2637L8.07353 19.2637L8.78064 18.5566ZM17.7194 11.5566L10.7194 18.5566L11.4265 19.2637L18.4265 12.2637L17.7194 11.5566ZM4.75 5.91016H4.76V4.91016H4.75V5.91016Z" fill="#8B8B8B"/>
</Svg>

              <Text style={{color: "#FFF", fontSize: 12,
            color: focused? 'yellow' : 'grey'}}>offers</Text>
            </View>
          )
        }}/>
        <Tab.Screen name="offer" component={Profile} options={{
          tabBarIcon: ({focused}) =>(
            <View style={{alignItems: 'center'}}>
             <Svg width="23" height="23" viewBox="0 0 17 21" fill={focused? 'yellow': 'none'} xmlns="http://www.w3.org/2000/svg">
<Path d="M8.75 14.0841C10.9072 14.0841 12.8362 14.2613 14.2101 14.7479C14.8937 14.99 15.4048 15.2968 15.7415 15.6642C16.0678 16.0204 16.25 16.4539 16.25 17.0091C16.25 17.5636 16.0671 17.995 15.7397 18.3489C15.4017 18.7144 14.8886 19.0186 14.2031 19.258C12.8256 19.7391 10.896 19.9102 8.75 19.9102C6.59334 19.9102 4.6643 19.7329 3.2903 19.2463C2.60663 19.0042 2.09539 18.6974 1.75864 18.33C1.43221 17.9738 1.25 17.5403 1.25 16.9851C1.25 16.4306 1.43294 15.9992 1.7603 15.6453C2.09831 15.2799 2.61139 14.9757 3.29687 14.7363C4.67436 14.2552 6.60395 14.0841 8.75 14.0841ZM8.75 0.910156C11.4132 0.910156 13.544 3.04056 13.544 5.70121C13.544 8.36199 11.4131 10.4933 8.75 10.4933C6.08787 10.4933 3.95601 8.36192 3.95601 5.70121C3.95601 3.04062 6.08774 0.910156 8.75 0.910156Z" stroke="#8B8B8B"/>
</Svg>

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