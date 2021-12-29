import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import Swiper from 'react-native-web-swiper';
import CircleComponent from './CircleComponent';
import Circle from './CircleComponent';
import HomePage from './HomePage';

const styles = StyleSheet.create({
  container: {
  flex: 1,
 
  },
  slideContainer: {
    flex: 0.9,
   paddingVertical: 12,
   alignItems: 'center',

   
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

export default class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper from={0}
          loop
          controlsProps={{
            dotsWrapperStyle:{marginTop: 12},
            dotActiveStyle:{backgroundColor: 'red'}
             
          }}
          
        >
          <View style={[styles.slideContainer,styles.slide1]}>
          <View>
          <CircleComponent/>
          </View>
        
          </View>
          <View style={[styles.slideContainer,styles.slide2]}>
            <Text>Slide 2</Text>
          </View>
          <View style={[styles.slideContainer,styles.slide3]}>
            <Text>Slide 3</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}