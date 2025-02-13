import { create } from "zustand";

export type Product = {
  id: string;
  name: string;
  price: string;
  quantity: number;
};

type ProductStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
};

const productStore = (set: any): ProductStore => ({
  products: [],
  addProduct: (product) => {
    set((state: ProductStore) => ({
      products: [product, ...state.products],
    }));
  },
  deleteProduct: (productId) => {
    set((state: ProductStore) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },
  increaseQuantity: (productId) => {
    set((state: ProductStore) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }));
  },
  decreaseQuantity: (productId) => {
    set((state: ProductStore) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
          : product
      ),
    }));
  },
});
export const useProducts = create(productStore);
