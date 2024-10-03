import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import Header from "./src/components/Header";
import { colors } from "./src/global/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CategoriesScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Gris,
  },
});
