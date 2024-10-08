import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { colors } from './src/global/colors';
import Header from './src/components/Header';
import ProductsScreen from './src/screens/ProductsScreen';
import { StatusBar } from 'expo-status-bar';

export function Main() {
    const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: insets.bottom }}>
        <Header />
        {/* <CategoriesScreen /> */}
        <ProductsScreen />
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
})