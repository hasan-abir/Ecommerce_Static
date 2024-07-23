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

function furnitureReducer(furniture, { type }) {
  switch (type) {
    case 'fetch':
      return { ...furniture, items: demoData.data };
    default:
      return furniture;
  }
}
