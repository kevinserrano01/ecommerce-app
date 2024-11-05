import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import ReceiptsNavigator from "./ReceiptsNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { colors } from '../global/colors'
import MyPlacesNavigator from "./MyPlacesNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
        <Tab.Navigator
            initialRouteName="Shop"
            screenOptions={{
                headerShown: false, // Quitar el header
                tabBarShowLabel: false, // Quitar el texto de las pestañas
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen 
                name="Shop"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="shopping-bag" color={focused?colors.Naranja:colors.Gris} size={32} />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="shopping-cart" color={focused?colors.Naranja:colors.Gris} size={32} />
                    )
                }}
            />
            <Tab.Screen
                name="Receips"
                component={ReceiptsNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="receipt-long" color={focused?colors.Naranja:colors.Gris} size={32} />
                    )
                }}
            />
            <Tab.Screen
                name="Places"
                component={MyPlacesNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="location-on" color={focused?colors.Naranja:colors.Gris} size={32} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="person" color={focused?colors.Naranja:colors.Gris} size={32} />
                    )
                }}
            />
        </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        height: 80,
    }
})