import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import { clearUser } from '../features/auth/authSlice'
import { clearSessions } from '../database'

const Header = ({subtitle}) => {
  const user = useSelector(state=>state.authReducer.value.email)
  const dispatch = useDispatch()

  const onLogout = ()=>{
    dispatch(clearUser())
    clearSessions()
      .then(()=>console.log("Sesión eliminada"))
      .catch((error)=>console.log("Error al eliminar la sesión"))
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Ecommerce</Text>
      {/* <Text style={styles.title}>{subtitle}</Text> */}
      {
        user &&  <Pressable onPress={onLogout} style={styles.access}><Icon name="logout" size={20} color="#fff" /></Pressable>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 110,
        paddingTop: 50,
        backgroundColor: colors.Naranja,
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
    },
    title: {
        color: colors.Negro,
        fontWeight: 'bold',
        fontSize: 21
    },
    access: {
      alignSelf: 'flex-end',
      paddingRight: 16
    }
})