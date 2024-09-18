import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { ProductItem } from '@/components/product/productItem/ProductItem';
import { useProductListViewModel } from '@/viewmodels/ProductListViewModel';
import { Product } from '@/models/Product';
import { styles } from './styles';
import { SearchBar } from '@/components/searchBar/SearchBar';

interface ProductListProps {
  onProductPress: (product: Product) => void;
}

export const ProductList = ({ onProductPress }: ProductListProps) => {
  const flatListRef = useRef<FlatList<Product>>(null);

  const { products, loading, error, searchQuery, handleSearch, resultMessage } =
    useProductListViewModel();

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductItem product={item} onPress={() => onProductPress(item)} />
    ),
    [onProductPress]
  );
  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);
  const totalProducts = useMemo(() => products.length, [products]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
    }
  }, [products]);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={handleSearch}
        resultMessage={resultMessage}
      />

      <FlatList
        ref={flatListRef}
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        windowSize={5}
        removeClippedSubviews={true}
        ListEmptyComponent={
          <Text style={styles.emptyList}>Aucun produit trouvé</Text>
        }
      />
    </View>
  );
};
