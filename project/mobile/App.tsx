import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Widget from './src/components/Widget';
import { theme } from './src/theme';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  })

  return fontsLoaded ? (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>
      <StatusBar 
        style="auto"
        backgroundColor="transparent"
        translucent
      />
      <Widget />
    </View>
  ) : <AppLoading />
}



