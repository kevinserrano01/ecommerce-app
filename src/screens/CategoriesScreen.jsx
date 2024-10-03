import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import categories from '../data/categories.json'
import FlatCard from '../components/FlatCard'

const CategoriesScreen = () => {

    const renderCategoryItem = ({ item }) => {
        return (
          <View style={styles.categoriesContainer}>
            <FlatCard style={styles.flatContainer}>
                <Image source={{uri: item.image}} style={{width: 50, height: 50}} />
                <Text style={styles.categoriesCard}>{item.title}</Text>
            </FlatCard>
          </View>
        )
      }

  return (
    <View>
        <Text style={styles.titleCategories}>Categorias</Text>
        <FlatList 
            data={categories}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
        />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1,
    },
    flatContainer: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
    },
    titleCategories: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
        textAlign: 'center', // Centra el texto horizontalmente
        alignSelf: 'center'  // Centra el componente dentro de su contenedor
    },
    categoriesCard: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
})