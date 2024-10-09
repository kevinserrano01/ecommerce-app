import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import { colors } from '../global/colors'
import { useState } from 'react'
import products from '../data/products.json'

const Search = ({ setSearchResults }) => {
    // Almacenar los productos encontrados en un estado (setSearchResults)
    const [searchText, setSearchText] = useState(''); // Estado para el texto de búsqueda

    const handleSearch = () => {
        const foundProducts = products.filter(product => 
          product.title.toLowerCase().includes(searchText.toLowerCase())
        );
    
        if (foundProducts.length > 0) {
          setSearchResults(foundProducts);
        } else {
          setSearchResults([]);
          Alert.alert('Producto no encontrado', 'No se encontró ningún producto con ese nombre');
        }
      };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar productos..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Pressable style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}> 🔍 </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
        width: '100%',
        height: 45,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: '#000',
    },
    searchButton: {
        backgroundColor: colors.Naranja,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 10,
    },
    searchButtonText: {
        color: colors.Blanco,
        fontSize: 10,
        fontWeight: 'bold',
    },
})