import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import ReceiptsNavigator from "./ReceiptsNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Shop" component={ShopNavigator} />
            <Tab.Screen name="Cart" component={CartNavigator} />
            <Tab.Screen name="Receips" component={ReceiptsNavigator} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator
