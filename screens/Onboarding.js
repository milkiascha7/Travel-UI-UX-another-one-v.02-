import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, images, SIZES } from '../constants';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              onPress={() => navigation.goBack("TabNavigator")}
            >
              
            </TouchableOpacity>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity>
              <SimpleLineIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image 
          source={images.onboardingImage}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }} >
            <Text style={{ ...FONTS.h2}}> Digital Ticket</Text>
            <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.</Text>
          </View>

          <TouchableOpacity
            style={[ styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems:'center', justifyContent: 'center'}]}
            onPress={() => navigation.navigate("TabNavigator")}
          >
            <LinearGradient 
              style={{ height: '100%', width: '100%', alignItems:'center', justifyContent: 'center', borderRadius: 15 }}
              colors={['#46aeff', '#5884ff']}
              start={{ x: 0, y: 0}}
              endd={{ x: 1, y: 1}}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2}}>Start !</Text>
            </LinearGradient>
          </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.white
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent:'space-between',
    // borderBottomWidth: 1,
    // borderColor: COLORS.primary
  },
  shadow:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})