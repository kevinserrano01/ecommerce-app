import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import products from '../data/products'
import FlatCard from '../components/FlatCard'
import { useState, useEffect } from 'react'
import { colors } from '../global/colors'
import Search from '../components/Search'
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductsScreen = ({category, setCategory}) => {
    const [productsFiltered, setProductsFiltered] = useState([])
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        const productsTempFiltered = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        setProductsFiltered(productsTempFiltered)
    }, [category]) // cada vez que cambie la categoria se ejecuta el useEffect
    

    const renderProductItem = ({item}) => {
        return (
            <FlatCard style={styles.productContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri:item.mainImage}}
                        style={styles.productImage}
                        resizeMode="contain" // Acomodar la imagen
                    />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.productDescription}>{item.shortDescription}</Text>
                    <Text style={styles.productStock}> Stock: {item.stock} </Text>
                    <FlatList 
                        data={item.tags}
                        keyExtractor={() => Math.random().toString()}
                        renderItem={({ item }) => <Text style={styles.productTag}>{item}</Text>}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    {
                        item.discount>0 && <Text style={styles.productDiscount}> {item.discount}% OFF </Text>
                    }
                    <Text style={styles.productPrice}> ${item.price} </Text>
                </View>
            </FlatCard>
        )
    };
  return (
    <>
        <Pressable style={styles.backButton} onPress={() => setCategory("")}>
            <Text style={styles.backButtonText}>
                <Icon name="arrow-back-ios" size={20} color={colors.Negro} />
            </Text>
        </Pressable>
        <Search setSearchResults={setSearchResults} />
        {searchResults !== null ? (
            searchResults.length > 0 ? (
            <FlatList 
                data={searchResults}
                keyExtractor={item => item.id}
                renderItem={renderProductItem}
                contentContainerStyle={{ paddingBottom: 20 }} // Añade espacio al final del contenido
            />
            ) : (
            <Text style={styles.noResultsText}>Producto no encontrado</Text>
            )
        ) : (
            <FlatList 
                data={productsFiltered}
                keyExtractor={item => item.id}
                renderItem={renderProductItem}
                contentContainerStyle={{ paddingBottom: 20 }} // Añade espacio al final del contenido
            />
        )}
    </>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Fondo gris claro
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
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
    productContainer: {
        flexDirection: 'row',
        backgroundColor: 'white', // Fondo blanco para cada producto
        height: 220,
        borderRadius: 8,
        padding: 10,
        margin: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    imageContainer: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    productTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productDiscount: {
        fontSize: 14,
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productTag: {
        fontSize: 12,
        color: '#777',
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 6,
        paddingVertical: 5,
        marginRight: 5,
        marginTop: 6,
        height: 25,
        borderRadius: 12,
        overflow: 'hidden', // Asegura que el contenido se ajuste a los bordes redondeados
    },
    productStock: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    noResultsText: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
      },
})