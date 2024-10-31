import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { setProfileImage } from '../features/auth/authSlice';
import { usePutProfileImageMutation } from '../services/userService';

const ProfileScreen = () => {
    // const [image, setImage] = useState("")
    // const [user, setUser] = useState("Kevin")
    const user = useSelector(state=>state.authReducer.value.email);
    const image = useSelector(state=>state.authReducer.value.profileImage);
    const localId = useSelector(state=>state.authReducer.value.localId);
    
    const dispatch = useDispatch()
    const [triggerPutProfileImage, result] = usePutProfileImageMutation();
    

    const verifyCameraPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera permissions to make this work!');
            return false;
        }
        return true;
    };

    const pickImage = async () => {
        const hasPermission = await verifyCameraPermissions();
        if (!hasPermission) return;
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // All files
            allowsEditing: true, // Editar imagen
            aspect: [1, 1], // Aspect de la imagen
            quality: 1, // Calidad de la imagen
        });

        if (!result.cancelled) {
            dispatch(setProfileImage(`data:image/jpg;base64,${result.assets[0].base64}`)); // Guardar la imagen en el store
            triggerPutProfileImage({image: `data:image/jpg;base64,${result.assets[0].base64}`, localId}); // Enviar la imagen al servidor
        }
    };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
            {
                image ? (
                    <Image
                        style={styles.profileImage}
                        source={{ uri: image }}
                        resizeMode='cover'
                    />
                ) : (
                    <Text style={styles.textProfileImage}>{user.charAt(0).toUpperCase()}</Text>
                )
            }
          <Pressable style={styles.editButton} onPress={pickImage}>
            <Icon name="edit" size={20} color="#fff" />
          </Pressable>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </Text>
        <Button title="Edit Profile" onPress={() => {}} />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imageContainer: {
        position: 'relative',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    textProfileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: 60,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    editButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#007bff',
        borderRadius: 20,
        padding: 5,
      },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
    body: {
        width: '100%',
        alignItems: 'center',
    },
    bio: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
})