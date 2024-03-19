import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <WelcomeScreen/>
  );
}
