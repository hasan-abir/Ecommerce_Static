'use client';

import { createContext, useContext, useReducer } from 'react';
import demoData from '../demo_furnitures.json';

const FurnitureContext = createContext(null);
const FurnitureDispatchContext = createContext(null);

export function FurnitureProvider({ children }) {
  const [furniture, dispatch] = useReducer(furnitureReducer, initialFurniture);

  return (
    <FurnitureContext.Provider value={furniture}>
      <FurnitureDispatchContext.Provider value={dispatch}>
        {children}
      </FurnitureDispatchContext.Provider>
    </FurnitureContext.Provider>
  );
}

export function useFurniture() {
  return useContext(FurnitureContext);
}

export function useFurnitureDispatch() {
  return useContext(FurnitureDispatchContext);
}

const initialFurniture = {
  items: [],
};

function furnitureReducer(furniture, { type, action }) {
  switch (type) {
    case 'fetch':
      let items = [];
      if (action.category === 'all') {
        items = demoData.data;
      } else {
        items = demoData.data.filter(
          (item) => item.category === action.category
        );
      }
      return { ...furniture, items };
    default:
      return furniture;
  }
}
