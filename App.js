import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar, useColorScheme } from "react-native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import logger from "./app/utility/logger";

logger.start();

export default function App() {
  const deviceTheme = useColorScheme();
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Prevent the splash screen from hiding
        await SplashScreen.preventAutoHideAsync();

        // Restore user and user state
        const user = await authStorage.getUser();
        if (user) {
          setUser(user);
        }
      } catch (e) {
        logger.warn(e);
      } finally {
        // Set the app as ready and hide the splash screen
        setIsReady(true);
        setTimeout(async () => {
          await SplashScreen.hideAsync();
        }, 1000); // 1000 ms delay
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return null; // Return nothing or a loading indicator if needed
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <StatusBar
        barStyle={deviceTheme === "dark" ? "light-content" : "dark-content"}
      />
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
