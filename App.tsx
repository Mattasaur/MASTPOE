/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Below is library adding screens of app
import AddBook from '../bookWorm/android/screens/addBook';
import HomeScreen from'./android/screens/HomeScreen';
import History from './android/screens/history';
import Genre from './android/screens/genre';

const Stack = createNativeStackNavigator();
// Stack Navigator allowing navigation between screens
function App(): React.JSX.Element{
  return(
<NavigationContainer>
  <Stack.Navigator initialRouteName='BookWorm'>
    <Stack.Screen name='BookWorm' component={HomeScreen}/>
    <Stack.Screen name='Add Book' component={AddBook}/>
    <Stack.Screen name='History' component={History}/>
    <Stack.Screen name='Genre' component={Genre}/>
  </Stack.Navigator>
</NavigationContainer>
  );
}
// Styles to be shared
const styles = StyleSheet.create({
  
  sectionTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    flex: 1,
    padding: 24,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor:'#FFF7E1',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionText:{
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor:'#FFF7E1',
  },
  buttonHeader: {
    fontWeight: '700',
  },
});

export default App;
