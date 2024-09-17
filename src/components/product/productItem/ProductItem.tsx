import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Product } from '@/models/Product';
import { styles } from './styles';

interface ProductItemProps {
  product: Product;
  onPress: (product: Product) => void;
}

export const ProductItem = ({ product, onPress }: ProductItemProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(product)} style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} €</Text>
      <Text style={styles.supplier}>{product.supplier}</Text>
    </TouchableOpacity>
  );
};
