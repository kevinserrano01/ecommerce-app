import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Header from "../components/Header"
import { CategoriesScreen, ProductsScreen, ProductScreen } from "../screens"


const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}

export default Navigator