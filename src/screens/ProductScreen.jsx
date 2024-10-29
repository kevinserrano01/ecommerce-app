import { StyleSheet, Text, View, Image, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../global/colors';
import { useSelector, useDispatch } from 'react-redux';
import { useGetProductQuery } from '../services/shopService';
import { addItem } from '../features/cart/cartSlice';

const ProductScreen = ({}) => {
    const productId = useSelector(state => state.shopSlice.value.productId) // Agarra el valor de la store de redux
    const { data:productFound, error, isLoading } = useGetProductQuery(productId) // Hook de redux query
    const dispatch = useDispatch()

    if (isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: Error al cargar los detalles del producto</Text>;
    }

    if (!productFound) {
        return <Text>No se encontró el producto</Text>;
    }
    
   return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: productFound.mainImage }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{productFound.title}</Text>
          <Text style={styles.productDescription}>{productFound.longDescription}</Text>
          {productFound.discount > 0 && (
            <Text style={styles.productDiscount}>{productFound.discount}% OFF</Text>
          )}
          <Text style={styles.productPrice}>${productFound.price}</Text>
          <Text style={styles.productStock}>Stock: {productFound.stock}</Text>
          <View style={styles.tagsContainer}>
            {productFound.tags && productFound.tags.map(tag => (
              <Text key={tag} style={styles.productTag}>{tag}</Text>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.cartButton}
            onPress={() => dispatch(addItem({...productFound, quantity: 1}))}
            >
            <Text style={styles.cartButtonText}>Agregar al carrito</Text>
          </Pressable>
          <Pressable style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </Pressable>
        </View>
      </ScrollView>
    
    
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.Naranja,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginVertical: 10,
        alignSelf: 'flex-start',
    },
      backButtonText: {
        color: colors.Negro,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
      },
      productImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
      },
      productDetails: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
        // borderTopStartRadius: 20,
        // borderTopEndRadius: 40,
      },
      productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      productDescription: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
      },
      productPrice: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      productDiscount: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      productStock: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
      },
      tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      productTag: {
        fontSize: 14,
        color: '#888',
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
        marginTop: 5,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 25,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
      },
      cartButton: {
        flex: 1,
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginRight: 15,
      },
      cartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      buyButton: {
        flex: 1,
        backgroundColor: '#28a745',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginLeft: 10,
      },
      buyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})