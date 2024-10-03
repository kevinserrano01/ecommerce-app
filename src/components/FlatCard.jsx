import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../global/colors'


const FlatCard = ({children, style}) => {
  return (
    <View style={{...styles.cardContainer, ...style}}>
      {children}
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    cardContainer: {
        width: '95%',
        height: 100,
        backgroundColor: colors.Blanco,
        borderRadius: 10,
        elevation: 5,
        shadowColor: colors.Negro,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})