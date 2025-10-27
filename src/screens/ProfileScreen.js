import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/profileStyles';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.jpeg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Bruno Guerra</Text>
      <Text style={styles.role}>Desarrollador de Software</Text>
      <Text style={styles.description}>
        Apasionado por crear soluciones tecnológicas innovadoras y eficientes.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Catalog')}
      >
        <Text style={styles.buttonText}>Ver Catálogo</Text>
      </TouchableOpacity>
    </View>
  );
}