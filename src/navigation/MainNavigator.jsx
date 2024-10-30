import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { useSelector } from "react-redux";
import { useState } from "react";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const [user, setUser] = useState("demo")
    // const user = useSelector(state=>state.authReducer.value.email)
    // console.log(user)


    return (
        <NavigationContainer>
            {
                user ? <TabNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
        
    );
};

export default MainNavigator