import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Black</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 120,
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
    }
})