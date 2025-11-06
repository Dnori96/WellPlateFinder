import initialRecipes from '@/lib/mock/data.json';
import { createContext, useState } from 'react';

export const RecipesContext = createContext();

export default function RecipesProvider({ children }) {
  const [plates] = useState(initialRecipes);

  return <RecipesContext.Provider value={{ plates }}>{children}</RecipesContext.Provider>;
}
