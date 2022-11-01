/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type { Node } from 'react';
 import { useColorScheme, } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
 
 
 /**
  * Components
  */
 import HomeScreen from './src/HomeScreen';
 import LearningScreen from './src/LearningScreen'
 import SettingsScreen from './src/SettingScreen';
 
 
 /**
  * App.js will be used for navigating between pages
  */
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
   // setSettings({
   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   //   textSize: 10
   // });
 
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Learning" component={LearningScreen} />
         <Stack.Screen name="Settings" component={SettingsScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 
 export default App;
