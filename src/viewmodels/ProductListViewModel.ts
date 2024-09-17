import { useState, useEffect } from 'react';
import { fetchProducts } from '@/api/productApi';
import { Product } from '@/models/Product';

export const useProductListViewModel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    try {
      setLoading(true);

      const data = await fetchProducts();
      console.log({ data });

      setProducts(data);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.log(err);
      setError('Erreur lors du chargement des produits');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, loadProducts };
};
