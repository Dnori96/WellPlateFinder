import { describe, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import RecipeInfo from '@/pages/RecipeInfo';
import NotFoundPage from '@/pages/NotFoundPage';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RecipesProvider from '@/context/recipesContext';

function renderWithRoute(pathname) {
  return render(
    <RecipesProvider>
      <MemoryRouter initialEntries={[pathname]}>
        <Routes>
          <Route path="/recipes/recipe/:plateId" element={<RecipeInfo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    </RecipesProvider>
  );
}

describe('RecipeInfo page & routes', () => {
  it('renders specific recipe by id from route params', async () => {
    renderWithRoute('/recipes/recipe/3');
    expect(await screen.findByRole('heading', { name: /salmon/i })).toBeInTheDocument();
    // breadcrumb
    expect(screen.getByText(/recipes \//i)).toBeInTheDocument();
  });

  it('renders 404 for unknown route', async () => {
    renderWithRoute('/nope');
    expect(await screen.findByText(/page not found/i)).toBeInTheDocument();
  });
});
