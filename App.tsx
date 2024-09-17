import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductListScreen } from '@/views/ProductListScreen';
import { ProductDetailsScreen } from '@/views/ProductDetailsScreen';
import { Product } from '@/models/Product';
import { RootStackParamList } from '@/type';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: 'Liste des produits' }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={({ route }) => ({ title: route.params.product.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
