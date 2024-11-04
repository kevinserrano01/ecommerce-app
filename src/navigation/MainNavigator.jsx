import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setProfileImage } from "../features/auth/authSlice";
import { useGetProfileImageQuery } from "../services/userService";


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.value.email)
    const localId = useSelector(state=>state.authReducer.value.localId)
    console.log(localId)
    const dispatch = useDispatch()
    const {data:profileImage, error, isLoading} = useGetProfileImageQuery(localId)

    useEffect(()=>{
        if(profileImage){
            dispatch(setProfileImage(profileImage.image))
        }
        
    },[profileImage])

    return (
        <NavigationContainer>
            {
                user ? <TabNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
        
    );
};

export default MainNavigator