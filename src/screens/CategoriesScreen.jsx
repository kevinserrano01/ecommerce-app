import { FlatList, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native'
// import categories from '../data/categories.json'
import FlatCard from '../components/FlatCard'
import { useSelector, useDispatch } from 'react-redux' // Me permite agarrar algo de la store de redux. useSelector es un hook
import { setCategory } from '../features/shop/shopSlice'
import { useGetCategoriesQuery } from '../services/shopService'

const CategoriesScreen = ({navigation}) => {
    // const categories = useSelector(state => state.shopSlice.value.categories) // Agarra el valor de la store de redux
    const { data: categories, error, isLoading } = useGetCategoriesQuery() // Hook de redux query
    const dispatch = useDispatch() // Me permite despachar una accion a la store de redux

    const renderCategoryItem = ({ item }) => {
        return (
            <Pressable onPress={() => {
                    dispatch(setCategory(item.title)) // Despacha la accion setCategory con el valor de la categoria
                    navigation.navigate('Productos', item.title) // Navega a la pantalla de productos con el valor de la categoria
                }
            }>
                <FlatCard style={styles.flatContainer}>
                    <Image source={{uri: item.image}} style={{width: 50, height: 50}} />
                    <Text style={styles.categoriesCard}>{item.title}</Text>
                </FlatCard>
            </Pressable>
        )
      }

  return (
    <>
        {
            isLoading && <ActivityIndicator size="large" color="#0000ff" />
        }
        {
            error && <Text>Error: Error al cargar las categorias</Text>
        }
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