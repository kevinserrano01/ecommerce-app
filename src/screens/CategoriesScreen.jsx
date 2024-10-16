import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import categories from '../data/categories.json'
import FlatCard from '../components/FlatCard'

const CategoriesScreen = ({navigation}) => {

    console.log('CategoriesScreen')

    const renderCategoryItem = ({ item }) => {
        return (
            <Pressable onPress={() => navigation.navigate('Productos', item.title)}>
                <FlatCard style={styles.flatContainer}>
                    <Image source={{uri: item.image}} style={{width: 50, height: 50}} />
                    <Text style={styles.categoriesCard}>{item.title}</Text>
                </FlatCard>
            </Pressable>
        )
      }

  return (
    <>
        <Text style={styles.titleCategories}>Categorias</Text>
        <FlatList 
            data={categories}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            contentContainerStyle={{paddingBottom: 20}}
        />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
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