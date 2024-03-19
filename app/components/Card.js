import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function Card(props) {
  return <View style={styles.card}></View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});

export default Card;
