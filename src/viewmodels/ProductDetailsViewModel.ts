import { useState, useEffect } from 'react';
import { fetchProductDetails } from '@/api/productApi';
import { Product } from '@/models/Product';
import { useCartStore } from '@/store/storeCardBasket';

export const useProductDetailsViewModel = (productId: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    loadProductDetails();
  }, [productId]);

  const loadProductDetails = async () => {
    try {
      setLoading(true);
      const data = await fetchProductDetails(productId);
      setProduct(data);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des détails du produit');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  return {
    product,
    loading,
    error,
    loadProductDetails,
    quantity,
    setQuantity,
    handleAddToCart,
  };
};
