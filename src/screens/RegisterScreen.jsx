import { StyleSheet, Text, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import { useRegisterMutation } from '../services/authService'

const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [triggerSignup, result] = useRegisterMutation()
    console.log(result)

    useEffect(() => {
        if (result.status === "rejected") {
            console.log("Error al agregar usuario")
        } else if (result.status === "fulfilled") {
            console.log("Usuario agregado correctamente")
        }
    }, [result])

    const onSubmit = () => {
        console.log(username, email, password)

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        triggerSignup({ email, password, username })
    };

  return (
    <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <Text>RegisterScreen</Text>
        <Text>Black</Text>
        <View>
            <TextInput 
                onChange={(text) => setUsername(text)}
                placeholder="Username"
                placeholderTextColor="white"
                style={{ color: 'white' }}
            />
            <TextInput 
                onChange={(text) => setEmail(text)}
                placeholder="Email"
                placeholderTextColor="white"
                style={{ color: 'white' }}
            />
            <TextInput 
                onChange={(text) => setPassword(text)}
                placeholder="Password"
                placeholderTextColor="white"
                style={{ color: 'white' }}
            />
            <TextInput 
                onChange={(text) => setConfirmPassword(text)}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                style={{ color: 'white' }}
            />
        </View>
    </LinearGradient>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})