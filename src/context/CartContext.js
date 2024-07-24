'use client';

import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

const initialCart = {
  items: [],
};

function cartReducer(cart, { type, action }) {
  switch (type) {
    case 'add-item':
      return { ...cart, items: [action.id, ...cart.items] };
    case 'remove-item':
      return {
        ...cart,
        items: [...cart.items].filter((item) => item !== action.id),
      };
    default:
      return cart;
  }
}
