import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import { useRegisterMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [triggerSignup, result] = useRegisterMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (result.status === "rejected") {
            console.log("Error al agregar usuario")
        } else if (result.status === "fulfilled") {
            console.log("Usuario agregado correctamente")
            dispatch(setUser(result.data))
        }
    }, [result])

    const onsubmit = () => {
        console.log(email, password)

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        triggerSignup({ email, password })
    };

  return (
    <LinearGradient
        colors={['#FF7D29', '#000000']}
        start={{ x: 0, y: 0 }} // esquina superior izquierda
        end={{ x: 1, y: 1 }}   // esquina inferior derecha
        style={styles.gradient}
    >
        <Text style={styles.title}>Registrate</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    // placeholderTextColor="#000"
                    placeholder="Email"
                    style={styles.textInput}
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    placeholder='Password'
                    style={styles.textInput}
                    secureTextEntry
                />
                <TextInput
                    onChangeText={(text) => setConfirmPassword(text)}
                    placeholder='Repetir password'
                    style={styles.textInput}
                    secureTextEntry
                />
            </View>
            <View style={styles.footTextContainer}>
                <Text style={styles.whiteText}>¿Ya tienes una cuenta? </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={
                        {
                            ...styles.whiteText,
                            ...styles.underLineText
                        }
                    }>
                        Inicia sesión
                    </Text>
                </Pressable>
            </View>

            <Pressable style={styles.btn} onPress={onsubmit}><Text style={styles.btnText}>Iniciar Sesion</Text></Pressable>

            <View style={styles.guestOptionContainer}>
                <Text style={styles.whiteText}>¿Solo quieres dar un vistazo?</Text>
                <Pressable><Text style={{ ...styles.whiteText, ...styles.strongText }}>Ingresa como invitado</Text></Pressable>
            </View>
    </LinearGradient>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        color: '#EBEBEB',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    inputContainer: {
        width: '100%'
    },
    textInput: {
        backgroundColor: '#EBEBEB',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    footTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    whiteText: {
        color: '#EBEBEB'
    },
    underLineText: {
        textDecorationLine: 'underline'
    },
    btn: {
        backgroundColor: '#EBEBEB',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },
    btnText: {
        color: '#400962',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    guestOptionContainer: {
        marginTop: 20
    },
    strongText: {
        fontWeight: 'bold'
    }
})