import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.container}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 100}
    >
      <ScrollView>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/nour.jpg")}
              title="Nour-eddine Legragui"
              subTitle="5 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </ScrollView>
      <View style={{ height: 20 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
