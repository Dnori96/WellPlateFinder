import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Plate from '@/components/Plate';

const baseDesc = {
  id: 3,
  title: 'One-Pan Lemon Garlic Salmon with Asparagus',
  text: 'A 15-minute weeknight dinner of flaky salmon and tender asparagus.',
  servings: 2,
  prepTime: 5,
  cookTime: 12,
};

const baseImages = {
  imgLarge: '/large.webp',
  imgSmall: '/small.webp',
  servings: '/servings.svg',
  prep: '/prep.svg',
  cook: '/cook.svg',
};

describe('Plate', () => {
  it('renders plate info and link', () => {
    render(
      <MemoryRouter>
        <Plate images={baseImages} desc={baseDesc} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: baseDesc.title })).toBeInTheDocument();
    expect(screen.getByText(baseDesc.text)).toBeInTheDocument();
    expect(screen.getByText('Servings: 2')).toBeInTheDocument();
    expect(screen.getByText('Prep: 5 mins')).toBeInTheDocument();
    expect(screen.getByText('Cook: 12 mins')).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: /view recipe/i });
    expect(btn.closest('a')).toHaveAttribute('href', `/recipes/recipe/${baseDesc.id}`);
  });

  it('shows singular min when time is 1', () => {
    render(
      <MemoryRouter>
        <Plate images={baseImages} desc={{ ...baseDesc, prepTime: 1, cookTime: 1 }} />
      </MemoryRouter>
    );
    expect(screen.getByText('Prep: 1 min')).toBeInTheDocument();
    expect(screen.getByText('Cook: 1 min')).toBeInTheDocument();
  });
});
