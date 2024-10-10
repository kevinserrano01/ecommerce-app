import { StyleSheet, Text, View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../global/colors';
import { useEffect, useState } from 'react';
import products from '../data/products';

const ProductScreen = ({ productId, setProductId }) => {
    const [productFound, setProductFound] = useState({})

    useEffect(() => {
        const product = products.find(product => product.id === productId)
        setProductFound(product)
    }, [productId])
    
  return (
    <View>
        <Pressable style={styles.backButton} onPress={() => setProductId(null)}>
            <Text style={styles.backButtonText}>
                <Icon name="arrow-back-ios" size={20} color={colors.Negro} />
            </Text>
        </Pressable>
      <Text>{ productFound.title }</Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: colors.Naranja, // Color de fondo azul
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25, // Bordes redondeados
        alignItems: 'left',
        marginVertical: 10,
        alignSelf: 'left', // Centrar el botón horizontalmente
    },
    backButtonText: {
        color: colors.Negro, // Color del texto blanco
        fontSize: 16,
        fontWeight: 'bold',
    },
})