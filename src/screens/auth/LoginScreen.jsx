import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import { setUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/authService';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const [triggerLogin, result] = useLoginMutation()

    useEffect(()=>{
        if(result.status==="rejected"){
            console.log("Error al iniciar sesión", result.error)
            const errorMessage = result.error.data?.error?.message || "Error desconocido";
            alert("Error al iniciar sesión: " + errorMessage);
        } else if (result.status==="fulfilled"){
            console.log("Usuario logueado con éxito")
            dispatch(setUser(result.data))
        }
    },[result])

    const onsubmit = ()=>{
        console.log(email,password)
        triggerLogin({email,password})
    }

  return (
    <LinearGradient
            colors={['#FF7D29', '#000000']}
            start={{ x: 0, y: 0 }} // esquina superior izquierda
            end={{ x: 1, y: 1 }}   // esquina inferior derecha
            style={styles.gradient}
        >
            <Text style={styles.title}>Iniciar Sesion</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    // placeholderTextColor="#EBEBEB"
                    placeholder="Email"
                    style={styles.textInput}
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    // placeholderTextColor="#EBEBEB"
                    placeholder='Password'
                    style={styles.textInput}
                    secureTextEntry
                />

            </View>
            <View style={styles.footTextContainer}>
                <Text style={styles.whiteText}>¿No tienes una cuenta? </Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={
                        {
                            ...styles.whiteText,
                            ...styles.underLineText
                        }
                    }>
                        Crea una
                    </Text>
                </Pressable>
            </View>

            <Pressable style={styles.btn} onPress={onsubmit}><Text style={styles.btnText}>Iniciar sesión</Text></Pressable>

            <View style={styles.guestOptionContainer}>
                <Text style={styles.whiteText}>¿Solo quieres dar un vistazo?</Text>
                <Pressable onPress={()=>dispatch(setUser({email:"demo@gmail.com",token:"demo"}))}>
                  <Text style={{ ...styles.whiteText, ...styles.strongText }}>Ingresa como invitado</Text>
                </Pressable>
            </View>
        </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    textInput: {
        backgroundColor: '#EBEBEB',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20
    },
    footTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    whiteText: {
        color: 'white'
    },
    underLineText: {
        textDecorationLine: 'underline'
    },
    btn: {
        backgroundColor: '#FF7D29',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    },
    guestOptionContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    strongText: {
        fontWeight: 'bold',
        marginLeft: 5
    }
})