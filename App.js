import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Bookmark, Onboarding, Search, DestinationDetail, Account  } from './screens'
import { COLORS, FONTS, SIZES, icons } from './constants';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto'

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


const TabNavigator = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        style: styles.tabBar,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        showLabel: false,
        headerShown: false
      }}
    > 
      <Tab.Screen name ="Home" component={Home} 
        options={{
          tabBarIcon: ({ color }) => <Feather name="home" size={32} color={color} />
        }}
      />

      <Tab.Screen name ="Search" component={Search} 
        options={{
          tabBarIcon: ({ color }) => <Feather name="search" size={32} color={color} />
        }}
      />
      <Tab.Screen name ="Bookmark" component={Bookmark} 
        options={{
          tabBarIcon: ({ color }) => <Feather name="bookmark" size={32} color={color} />
        }}
      />
      <Tab.Screen name="Account" component={Account} 
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={32} color={color} />
        }}
      />

    </Tab.Navigator>
  )
}


export default function App() {

  const [loaded] = useFonts({
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Light": require('./assets/fonts/Roboto-Light.ttf'),
    "Roboto-Thin": require('./assets/fonts/Roboto-Thin.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
  });
  
  if (!loaded) {
    return null;
  }



  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName={'Onboarding'} >

        <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
            // options={{
            //     title: null,
            //     headerStyle: {
            //         backgroundColor: COLORS.white,
                    
            //     },
            //     headerRight: null,
            //     headerLeft: () => (
            //         <TouchableOpacity
            //             style={{ marginRight: SIZES.padding }}
            //             onPress={() => console.log("Pressed")}
            //         >
            //             <Image
            //                 source={icons.barMenu}
            //                 resizeMode="contain"
            //                 style={{
            //                     width: 25,
            //                     height: 25,
            //                 }}
            //             />
            //         </TouchableOpacity>
            //     ),
            // }}
        />
        <Stack.Screen 
          name="TabNavigator" 
          component={TabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="DestinationDetail" 
          component={DestinationDetail} 
          options={{ headerShown: false }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
