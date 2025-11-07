import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import usePlateFilter, { ALLFilters } from '@/hooks/usePlateFilter';
import plates from '@/lib/mock/data.json';

function setup() {
  const { result } = renderHook(() => usePlateFilter({ plates }));
  return result;
}

describe('usePlateFilter', () => {
  it('returns all plates by default', () => {
    const result = setup();
    expect(result.current.filteredProducts.length).toBe(plates.length);
  });

  it('filters by input query (case-insensitive, substring)', () => {
    const result = setup();
    act(() => {
      result.current.setinputQuery('salmon');
    });
    const filtered = result.current.filteredProducts;
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((p) => p.title.toLowerCase().includes('salmon'))).toBe(true);
  });

  it('filters by exact prep and cook time', () => {
    const result = setup();
    const target = plates.find((p) => p.prepMinutes > 0 && p.cookMinutes > 0);
    act(() => {
      result.current.setFilters({ prepTime: target.prepMinutes, cookTime: target.cookMinutes });
    });
    const filtered = result.current.filteredProducts;
    expect(filtered.every((p) => p.prepMinutes === target.prepMinutes && p.cookMinutes === target.cookMinutes)).toBe(
      true
    );
  });

  it('supports ALLFilters to clear filters', () => {
    const result = setup();
    act(() => {
      result.current.setFilters({ prepTime: ALLFilters, cookTime: ALLFilters });
    });
    expect(result.current.filteredProducts.length).toBe(plates.length);
  });
});
