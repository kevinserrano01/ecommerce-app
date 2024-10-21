import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ReceiptsScreen from '../screens/ReceiptsScreen'

const Stack = createNativeStackNavigator()

const ReceiptsNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Recibos" component={ReceiptsScreen} />
    </Stack.Navigator>
  )
}

export default ReceiptsNavigator
