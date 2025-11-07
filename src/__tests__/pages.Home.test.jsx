import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Home from '@/pages/Home';
import { renderWithProviders } from './test-utils';

describe('Home page', () => {
  it('renders hero title and CTA', () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole('heading', { name: /healthy meals, zero fuss/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start exploring/i })).toBeInTheDocument();
  });
});
