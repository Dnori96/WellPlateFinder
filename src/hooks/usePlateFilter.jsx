import { useState } from 'react';

export const ALLFilters = 'all';

export default function usePlateFilter({ plates }) {
  const [filters, setFilters] = useState({
    prepTime: ALLFilters,
    cookTime: ALLFilters,
  });
  const [inputQuery, setinputQuery] = useState('');

  const filterInputSearch = (perPlate) => {
    if (!inputQuery) return perPlate;
    const searchPlate = perPlate.title.toLowerCase();
    const inputSearch = inputQuery.toLowerCase();
    return searchPlate.includes(inputSearch);
  };

  const filterProducts = (plates) => {
    return plates.filter((p) => {
      return (
        filterInputSearch(p) &&
        (filters.prepTime == ALLFilters || p.prepMinutes == filters.prepTime) &&
        (filters.cookTime == ALLFilters || p.cookMinutes == filters.cookTime)
      );
    });
  };

  const filteredProducts = filterProducts(plates);

  return { filteredProducts, setinputQuery, filters, setFilters };
}
