import { Product } from '@/models/Product';

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: { product: Product };
};
