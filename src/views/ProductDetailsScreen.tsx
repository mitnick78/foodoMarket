import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ProductDetails } from '@/components/product/productDetail/ProductDetails';
import { RootStackParamList } from '@/type';
import { styles } from './styles';

type ProductDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetails'
>;

type ProductDetailsScreenProps = {
  route: ProductDetailsScreenRouteProp;
  navigation: 'ProductDetails';
};

export const ProductDetailsScreen = ({ route }: ProductDetailsScreenProps) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <ProductDetails productId={product.id} />
    </View>
  );
};
