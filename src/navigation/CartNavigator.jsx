import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen'

const CartStack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <CartStack.Navigator>
        <CartStack.Screen name="Carrito" component={CartScreen} />
    </CartStack.Navigator>
  )
}

export default CartNavigator

const styles = StyleSheet.create({})