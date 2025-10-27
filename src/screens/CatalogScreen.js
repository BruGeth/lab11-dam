import { View, Text, Image } from 'react-native';
import styles from '../styles/catalogStyles';

const products = [
  {
    id: 1,
    name: 'Auriculares Bluetooth',
    price: 120,
    image: require('../../assets/headphones.jpg'),
  },
  {
    id: 2,
    name: 'Teclado Mecánico',
    price: 80,
    image: require('../../assets/keyboard.webp'),
  },
];

export default function CatalogScreen() {
  return (
    <View style={styles.container}>
      {products.map(product => (
        <View key={product.id} style={styles.card}>
          <Image source={product.image} style={styles.image} />
          <Text style={styles.name}>{product.name}</Text>
          <Text
            style={[
              styles.price,
              product.price > 100 && styles.priceHigh,
            ]}
          >
            S/ {product.price}
          </Text>
        </View>
      ))}
    </View>
  );
}