import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import { colors } from '../global/colors'

const Search = ({ setSearch }) => {

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar productos..."
          placeholderTextColor="#888"
          onChangeText={(text)=>setSearch(text)}
        />
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
})