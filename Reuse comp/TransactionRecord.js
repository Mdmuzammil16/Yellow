import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';


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

export default function TransactionRecord(){
    return (
        <FlatList
        style={{flex: 1, backgroundColor: "#FFF"}}
          data={DATA}
          renderItem={({item})=>
          <View style={{flex: 1 }}>
    
          
          <View style={{flex: 1, flexDirection: 'row',
          
           alignItems: 'center',
           paddingHorizontal: 10, marginBottom: 2,
           shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 4,
        elevation: 12,
           backgroundColor: 'white',
           borderRadius: 14,
          marginTop: 13,
          paddingVertical: 6,
          marginHorizontal: 15,
          paddingHorizontal: 10,
           justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                resizeMode={'contain'}
                  style={{height: 50, width: 50, borderRadius: 18}}
                  source={{uri: item.mainimg}}
                />
                <Text style={{marginLeft: 12, color: 'gray',
                 fontSize: 16, fontWeight: 'bold', fontFamily: 'Prompt-Regular',}}>{item.title}</Text>
              </View>
    
              <View >
                  <Text style={{color: "#FF4500",
                   fontWeight: 'bold', fontSize: 18, fontFamily: 'Prompt-Regular',}}>-$1200</Text>
                  <Text style={{color: 'grey', marginTop: 4, fontFamily: 'Prompt-Regular',}}>09:00 AM</Text>
              </View>
          </View>
          </View>
          }
    
        />
    
    );
  }

