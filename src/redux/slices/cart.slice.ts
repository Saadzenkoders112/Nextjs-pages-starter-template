import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cart } from "@/types/Interfaces/cart-interfaces/cart.interface";
import { Products } from "@/types/Interfaces/product-interfaces/product.interface";

interface CartItem extends Products {
    quantity: number
}

const initialState: { cart: Cart | null } = {
  cart: {
    id: "cart-1",
    products: [],
    totalAmount: 0,
    totalProducts: 0,
    totalQuantity: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{ products: Products; quantity: number }>
    ) => {
      const { products, quantity } = action.payload;
      if (state.cart) {
        if (!products.id) {
          // Handle missing ID case
          console.error("Product ID is required");
          return;
        }

        // Update the products array
        const existingProductIndex = state.cart.products.findIndex(
          (p) => p.id === products.id
        );

        if (existingProductIndex !== -1) {
          // Update existing product
          const existingProduct = state.cart.products[existingProductIndex] as CartItem;
          state.cart.products[existingProductIndex] = {
            ...existingProduct,
            quantity: (existingProduct.quantity || 0) + quantity, // Ensure quantity is a number
          };
        } else {
          // Add new product
          state.cart.products.push({
            ...products,
            quantity, // Ensure quantity is a number
          } as CartItem);
        }

        state.cart.totalQuantity += quantity;
        state.cart.totalProducts = state.cart.products.length;
        state.cart.totalAmount = state.cart.products.reduce(
          (total, prod) => total + (prod.price || 0) * (prod.quantity || 0),
          0
        );
      } else {
        console.log("Cart is not initialized");
      }
    },
  },
});
export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
