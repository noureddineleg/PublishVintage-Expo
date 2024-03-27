import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
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
          setUser(setUser(user));
        }
      } catch (e) {
        // Handle errors, possibly by logging them
        console.warn(e);
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
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
