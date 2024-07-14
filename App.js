import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';

export default function App() {
  const [loaded, error] = useFonts({
    'Oswald-VariableFont_wght': require('./assets/fonts/Oswald-VariableFont_wght.ttf'),
    'Outfit-VariableFont_wght': require('./assets/fonts/Outfit-VariableFont_wght.ttf'),
  });
  return (
    <View>
     <LoginScreen/>
    </View>
  );
}


