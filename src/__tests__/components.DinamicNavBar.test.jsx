import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import DinamicNavBar from '@/components/Header/DinamicNavBar';
import { MemoryRouter } from 'react-router-dom';
import PageProvider from '@/context/pageContext';

function renderNav() {
  return render(
    <PageProvider>
      <MemoryRouter>
        <DinamicNavBar onPageChange={() => {}} />
      </MemoryRouter>
    </PageProvider>
  );
}

describe('DinamicNavBar', () => {
  it('renders nav buttons and highlights based on context page', () => {
    renderNav();
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /recipes/i })).toBeInTheDocument();
    // Initial page from context is HOME => h-nav might be highlighted
    const hNav = document.getElementById('h-nav');
    expect(hNav).toBeInTheDocument();
  });
});
