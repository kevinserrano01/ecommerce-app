import { StyleSheet, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import Header from "./src/components/Header";
import TabNavigator from "./src/navigation/TabNavigator";
import { store } from "./src/app/store";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'JosefinSans': require('./assets/fonts/JosefinSans-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <Header />
          <TabNavigator />
          <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
