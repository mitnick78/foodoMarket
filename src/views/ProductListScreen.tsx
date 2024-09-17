import React from 'react';
import { View } from 'react-native';
import { ProductList } from '@/components/product/productList/ProductList';
import { Product } from '@/models/Product';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/type';
import { styles } from './styles';

type ProductListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductList'
>;

interface ProductListScreenProps {
  navigation: ProductListScreenNavigationProp;
}

export const ProductListScreen = ({ navigation }: ProductListScreenProps) => {
  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetails', { product });
  };
  return (
    <View style={styles.container}>
      <ProductList onProductPress={handleProductPress} />
    </View>
  );
};
