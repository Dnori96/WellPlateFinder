import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Header from '@/components/Header/Header';
import { MemoryRouter } from 'react-router-dom';
import PageProvider from '@/context/pageContext';

function renderHeader() {
  return render(
    <PageProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </PageProvider>
  );
}

describe('Header', () => {
  it('renders logo and Browse recipes button', () => {
    renderHeader();
    expect(screen.getAllByAltText(/healthy recipe finder/i)[0]).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /browse recipes/i })[0]).toBeInTheDocument();
  });
});
