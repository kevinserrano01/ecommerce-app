import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import Search from './Search'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Black</Text>
      {/* <Search /> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 135,
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