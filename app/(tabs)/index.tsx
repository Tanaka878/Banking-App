import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    
    </View>
  
  );
}


const styles = StyleSheet.create({

  container:{
    backgroundColor:Colors.white,
    flex:1,
  }
})
