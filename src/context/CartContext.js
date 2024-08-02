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
      const quantity = action.quantity ? action.quantity : 1;

      return {
        ...cart,
        items: [{ id: action.id, quantity }, ...cart.items],
      };
    case 'remove-item':
      return {
        ...cart,
        items: [...cart.items].filter((item) => item.id !== action.id),
      };
    case 'clear-all':
      return {
        ...cart,
        items: [],
      };
    case 'increment-quantity':
      return {
        ...cart,
        items: cart.items.map((item) => {
          if (item.id === action.id && item.quantity < action.maxQuantity) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      };
    case 'decrement-quantity':
      return {
        ...cart,
        items: cart.items.map((item) => {
          if (item.id === action.id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      };
    default:
      return cart;
  }
}
