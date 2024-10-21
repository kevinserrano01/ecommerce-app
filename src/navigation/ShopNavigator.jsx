import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CategoriesScreen, ProductsScreen, ProductScreen } from "../screens"


const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
        <Stack.Navigator
            // screenOptions={{
            //     header: ({route}) => <Header subtitle={route.name}/>
            // }}
            initialRouteName="Categorias"
        >
            <Stack.Screen name="Categorias" component={CategoriesScreen} />
            <Stack.Screen name="Productos" component={ProductsScreen} />
            <Stack.Screen name="Producto" component={ProductScreen} />
            {/* <Stack.Group></Stack.Group> */}
        </Stack.Navigator>
  )
}

export default ShopNavigator