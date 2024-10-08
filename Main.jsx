import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { colors } from './src/global/colors';
import Header from './src/components/Header';
import ProductsScreen from './src/screens/ProductsScreen';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export function Main() {
    const insets = useSafeAreaInsets();
    const [category, setCategory] = useState("");


  return (
    <View style={{ paddingBottom: insets.bottom }}>
        <Header />

        { category ? 
            <ProductsScreen category={category} setCategory={setCategory} />
            :
            <CategoriesScreen setCategory={setCategory} />
        }

        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
})