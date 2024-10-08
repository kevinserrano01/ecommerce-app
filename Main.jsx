import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { colors } from './src/global/colors';
import Header from './src/components/Header';
import ProductsScreen from './src/screens/ProductsScreen';

export function Main() {
    const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: insets.bottom }}>
        <Header />
        {/* <CategoriesScreen /> */}
        <ProductsScreen />
    </View>
  )
}

const styles = StyleSheet.create({
})