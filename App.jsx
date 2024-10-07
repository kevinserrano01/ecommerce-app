import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./Main";
import { colors } from './src/global/colors';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Gris,
  },
});
