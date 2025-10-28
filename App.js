import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import CameraScreen from './src/screens/CameraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
          animation: 'default',
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ 
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={({ navigation }) => ({ 
            title: 'Perfil',
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <Text style={{ color: '#007AFF', fontSize: 16, marginRight: 10 }}>📷 Cámara</Text>
              </TouchableOpacity>
            ),
          })} 
        />
        <Stack.Screen 
          name="Catalog" 
          component={CatalogScreen} 
          options={({ navigation }) => ({ 
            title: 'Catálogo',
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                <Text style={{ color: '#007AFF', fontSize: 16, marginRight: 10 }}>📷 Cámara</Text>
              </TouchableOpacity>
            ),
          })} 
        />
        <Stack.Screen 
          name="Camera" 
          component={CameraScreen} 
          options={{ 
            title: 'Cámara',
            headerShown: true,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}