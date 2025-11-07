import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PageProvider from '@/context/pageContext';
import RecipesProvider from '@/context/recipesContext';

export function renderWithProviders(ui, { route = '/', ...renderOptions } = {}) {
  window.history.pushState({}, 'Test page', route);
  function Wrapper({ children }) {
    return (
      <RecipesProvider>
        <PageProvider>
          <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
        </PageProvider>
      </RecipesProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export function renderWithRoutes({ routes, initialEntries = ['/'] }) {
  function AllProviders({ children }) {
    return (
      <RecipesProvider>
        <PageProvider>
          <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
        </PageProvider>
      </RecipesProvider>
    );
  }

  return render(
    <AllProviders>
      <Routes>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Routes>
    </AllProviders>
  );
}
