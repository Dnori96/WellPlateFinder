import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import Recipes from '@/pages/Recipes';
import { renderWithProviders } from './test-utils';
import data from '@/lib/mock/data.json';

describe('Recipes page', () => {
  it('renders heading and all plates initially', () => {
    renderWithProviders(<Recipes />);
    expect(screen.getByRole('heading', { name: /explore our simple, healthy recipes/i })).toBeInTheDocument();
    // Each recipe title should appear
    data.forEach((r) => {
      expect(screen.getByRole('heading', { name: r.title })).toBeInTheDocument();
    });
  });

  it('filters by search input (substring match)', () => {
    renderWithProviders(<Recipes />);
    const input = screen.getByPlaceholderText(/search by name or ingredient/i);
    fireEvent.change(input, { target: { value: 'salmon' } });
    // Only salmon recipe should appear
    expect(screen.getByRole('heading', { name: /salmon/i })).toBeInTheDocument();
    // Other one absent check (e.g., quinoa)
    expect(screen.queryByRole('heading', { name: /quinoa veggie power bowl/i })).toBeNull();
  });
});
