import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CatalogScreen from './src/screens/CatalogScreen';

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
          options={{ 
            title: 'Perfil',
            headerShown: true,
          }} 
        />
        <Stack.Screen 
          name="Catalog" 
          component={CatalogScreen} 
          options={{ 
            title: 'Catálogo',
            headerShown: true,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}