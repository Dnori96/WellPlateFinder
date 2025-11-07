import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RecipesProvider, { RecipesContext } from '@/context/recipesContext';
import data from '@/lib/mock/data.json';

function Consumer() {
  return (
    <RecipesContext.Consumer>
      {({ plates }) => <span data-testid="plates-count">{plates.length}</span>}
    </RecipesContext.Consumer>
  );
}

describe('RecipesContext', () => {
  it('provides plates data from mock json', () => {
    render(
      <RecipesProvider>
        <Consumer />
      </RecipesProvider>
    );
    expect(screen.getByTestId('plates-count').textContent).toBe(String(data.length));
  });
});
