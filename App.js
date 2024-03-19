import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import Card from "./app/components/Card";

export default function App() {
  return (
    // <WelcomeScreen/>
    <Card
      title="Ancient Maghrebian coin for sale!"
      subtitle="$100"
      image={require("./app/assets/coin.jpg")}
    />
  );
}
