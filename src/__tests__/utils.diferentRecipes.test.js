import { describe, it, expect } from 'vitest';
import { threeDifRecipes } from '@/utils/diferentRecipes';

describe('threeDifRecipes', () => {
  it('returns 3 different recipe ids excluding the current id when possible', () => {
    const picks = threeDifRecipes(2, 8);
    expect(picks.length).toBe(3);
    expect(new Set(picks).size).toBe(3);
    expect(picks).not.toContain(2);
    picks.forEach((id) => expect(id).toBeGreaterThanOrEqual(1));
  });

  it('never picks more than total-1 and handles small totalRecipes', () => {
    const picks = threeDifRecipes(1, 2);
    expect(picks.length).toBe(1);
    expect(picks).not.toContain(1);
  });

  it('returns empty array when totalRecipes is 1', () => {
    const picks = threeDifRecipes(1, 1);
    expect(picks).toEqual([]);
  });

  it('randomness: multiple calls produce varied results (probabilistic)', () => {
    const runs = Array.from({ length: 10 }, () => threeDifRecipes(1, 8));
    const unique = new Set(runs.map((r) => r.join(',')));
    expect(unique.size).toBeGreaterThan(1); // Likely true; if flakes increase runs.
  });
});
