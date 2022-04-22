import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const OptionItem = ({ icon, bgColor, label, onPress }) => {
  return(
    <TouchableOpacity
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={onPress}
    >
      <View style={[styles.shadow ,{ width: 60, height: 60 }]}>
        <LinearGradient 
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
          colors={bgColor}
          start={{ x: 0, y: 1 }}
        >
          <Image 
            source={icon}
            resizeMode="cover"
            style={{
              tintColor: COLORS.white,
              width: 30,
              height: 30
            }}
          />
        </LinearGradient>
      </View>
      <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
    </TouchableOpacity>
  )
}

const Home = ({ navigation }) => {

  const [destinations, setDestinations] = useState([
    {
      id: 0,
      name: "Ski Villa",
      img: images.skiVilla,
    },
    {
        id: 1,
        name: "Climbing Hills",
        img: images.climbingHills,
    },
    {
        id: 2,
        name: "Frozen Hills",
        img: images.frozenHills,
    },
    {
        id: 3,
        name: "Beach",
        img: images.beach,
    },
  ])

  const renderDestinations = (item, index) => {
    var destinationStyle = {}

    if( index == 0) {
      destinationStyle = { marginLeft: SIZES.padding }
    }
    return(
      <TouchableOpacity 
        style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
        onPress={() => navigation.navigate('DestinationDetail')}
      >
        
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.28,
            height: '82%',
            borderRadius: 15
          }}
        />
        <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={styles.container}>

    {/** header section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.goBack("TabNavigator")}
          >
            <Feather name="corner-up-left" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <SimpleLineIcons name="options-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/** Banner */}
      <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding }}>
        <Image 
          source={images.homeBanner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 15
          }}
        />
      </View>

      {/** Options */}
      <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.radius }}>
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
            <OptionItem 
              icon={icons.airplane}
              bgColor={['#46aeff', '#5884ff']}
              label="Flight"
              onPress={() => { console.log("flight")}}
            />
            <OptionItem 
              icon={icons.train}
              bgColor={['#fddf90', '#fcda13']}
              label="Train"
              onPress={() => { console.log("train")}}
            />
            <OptionItem 
              icon={icons.bus}
              bgColor={['#e973ad', '#da5df2']}
              label="Bus"
              onPress={() => { console.log("Bus")}}
            />
            <OptionItem 
              icon={icons.taxi}
              bgColor={['#fcaba8', '#fe6bba']}
              label="Taxi"
              onPress={() => { console.log("taxi")}}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
            <OptionItem 
              icon={icons.bed}
              bgColor={['#ffc465', '#ff9c5f']}
              label="Bed"
              onPress={() => { console.log("bed")}}
            />
            <OptionItem 
              icon={icons.eat}
              bgColor={['#7cf1fb', '#4ebefd']}
              label="Eat"
              onPress={() => { console.log("eat")}}
            />
            <OptionItem 
              icon={icons.compass}
              bgColor={['#7be993', '#46caaf']}
              label="Adventure"
              onPress={() => { console.log("adventure")}}
            />
            <OptionItem 
              icon={icons.event}
              bgColor={['#fca397', '#fc7b6c']}
              label="Event"
              onPress={() => { console.log("events")}}
            />
          </View>
      </View>

      {/** Destination */}
      <View style={{ flex: 1 }}>
          <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Destination</Text>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={destinations}
            renderItem={({ item, index}) => renderDestinations(item, index)}
            keyExtractor={ item => item.id }
          />
        </View>
      
      
     
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
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
  headerRight:{

  },
  headerLeft:{

  },
})