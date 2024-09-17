import React, { useCallback, useRef } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useProductDetailsViewModel } from '@/viewmodels/ProductDetailsViewModel';
import { styles } from './styles';
import { QuantitySelector } from '@/components/quantity/QuantitySelector';

interface ProductDetailsProps {
  productId: number;
}

export const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const { product, loading, error, quantity, setQuantity, handleAddToCart } =
    useProductDetailsViewModel(productId);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  if (loading) {
    return <Text>Chargement...</Text>;
  }

  if (error || !product) {
    return <Text>Erreur: {error || 'Produit non trouvé'}</Text>;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ScrollView style={styles.container}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price} €</Text>
          <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
        <TouchableOpacity style={styles.addButton} onPress={openBottomSheet}>
          <Text style={styles.addButtonText}>Ajouter au panier</Text>
        </TouchableOpacity>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={['50%']}
          backgroundStyle={styles.bottomSheetBackground}
          style={styles.bg}
        >
          <View style={styles.bottomSheetContent}>
            <Image
              source={{ uri: product.imageUrl }}
              style={styles.bottomSheetImage}
            />
            <Text style={styles.bottomSheetName}>{product.name}</Text>
            <Text style={styles.bottomSheetPrice}>{product.price} €</Text>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <TouchableOpacity
              style={styles.validateButton}
              onPress={() => {
                handleAddToCart();
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text style={styles.validateButtonText}>Valider</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
