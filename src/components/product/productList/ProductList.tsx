import React from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import { ProductItem } from '@/components/product/productItem/ProductItem';
import { useProductListViewModel } from '@/viewmodels/ProductListViewModel';
import { Product } from '@/models/Product';
import { styles } from './styles';

interface ProductListProps {
  onProductPress: (product: Product) => void;
}

export const ProductList = ({ onProductPress }: ProductListProps) => {
  const { products, loading, error } = useProductListViewModel();
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductItem product={item} onPress={onProductPress} />
      )}
    />
  );
};
