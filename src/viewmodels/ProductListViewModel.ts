import { useState, useEffect, useMemo } from 'react';
import { fetchProducts } from '@/api/productApi';
import { Product } from '@/models/Product';

export const useProductListViewModel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    loadProducts();
  }, []);
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);
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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const resultMessage = useMemo(() => {
    const totalProducts = products.length;
    const foundProducts = filteredProducts.length;

    if (!searchQuery) return `${totalProducts} produits au total`;

    switch (foundProducts) {
      case 0:
        return 'Aucun produit trouvé';
      case 1:
        return '1 produit trouvé';
      default:
        return `${foundProducts} produits trouvés`;
    }
  }, [searchQuery, products, filteredProducts]);

  return {
    products: filteredProducts,
    loading,
    error,
    loadProducts,
    searchQuery,
    handleSearch,
    resultMessage,
  };
};
