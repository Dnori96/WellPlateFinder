import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import PageProvider, { PageContext } from '@/context/pageContext';
import { pages } from '@/const/pages';

function Consumer() {
  return (
    <PageContext.Consumer>
      {({ page, changeFocusPage }) => (
        <div>
          <span data-testid="page-value">{page}</span>
          <button onClick={() => changeFocusPage(pages.ABOUT)}>GoAbout</button>
        </div>
      )}
    </PageContext.Consumer>
  );
}

describe('PageContext', () => {
  it('initializes with HOME page by default', () => {
    render(
      <PageProvider>
        <Consumer />
      </PageProvider>
    );
    expect(screen.getByTestId('page-value').textContent).toBe(pages.HOME);
  });

  it('changes page and persists in sessionStorage', () => {
    sessionStorage.clear();
    render(
      <PageProvider>
        <Consumer />
      </PageProvider>
    );
    act(() => {
      screen.getByText('GoAbout').click();
    });
    expect(screen.getByTestId('page-value').textContent).toBe(pages.ABOUT);
    expect(sessionStorage.getItem('page-WPF-KEY')).toBe(pages.ABOUT);
  });

  it('does not update if same page passed', () => {
    sessionStorage.clear();
    render(
      <PageProvider>
        <Consumer />
      </PageProvider>
    );
    const prev = screen.getByTestId('page-value').textContent;
    // clicking with same page value should keep sessionStorage same
    act(() => {
      screen.getByText('GoAbout').click();
      screen.getByText('GoAbout').click();
    });
    expect(screen.getByTestId('page-value').textContent).toBe(pages.ABOUT);
    expect(sessionStorage.getItem('page-WPF-KEY')).toBe(pages.ABOUT);
    expect(prev).toBe(pages.HOME);
  });
});
