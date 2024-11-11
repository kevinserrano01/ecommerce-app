import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProfileImage } from "../features/auth/authSlice";
import { useGetProfileImageQuery } from "../services/userService";
import { fetchSession } from "../database";
import { setUser } from "../features/auth/authSlice";


const MainNavigator = () => {
    const user = useSelector(state=>state.authReducer.value.email)
    const localId = useSelector(state=>state.authReducer.value.localId)
    console.log(localId)
    const dispatch = useDispatch()
    const {data:profileImage, error, isLoading} = useGetProfileImageQuery(localId)

    useEffect(()=>{
        if(!user){
            (async ()=>{
                try{
                    const session = await fetchSession()
                    //console.log("Session: ",session)
                    if(session.length){
                        //console.log("session _array",session)
                        dispatch(setUser(session[0]))
                    }
                }catch(error){
                    console.log("Error al obtener la sesión", error)
                }    
            })()
        }
    },[user])

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