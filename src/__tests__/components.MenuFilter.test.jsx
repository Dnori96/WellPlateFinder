import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuFilter from '@/components/MenuFilter';
import data from '@/lib/mock/data.json';
import { ALLFilters } from '@/hooks/usePlateFilter';

function setup(initial = { prepTime: ALLFilters, cookTime: ALLFilters }) {
  const change = { prep: [], cook: [] };
  const ui = render(
    <MenuFilter
      times={data}
      filters={initial}
      onPrepTimeChange={(v) => change.prep.push(v)}
      onCookTimeChange={(v) => change.cook.push(v)}
    />
  );
  return { ...ui, change };
}

describe('MenuFilter', () => {
  it('renders two dropdown buttons', () => {
    setup();
    expect(screen.getAllByRole('button', { name: /max prep time/i })).toHaveLength(1);
    expect(screen.getAllByRole('button', { name: /max cook time/i })).toHaveLength(1);
  });

  it('calls onPrepTimeChange when selecting Clear', () => {
    const { change } = setup();
    // open first menu
    const prepBtn = screen.getByRole('button', { name: /max prep time/i });
    fireEvent.click(prepBtn);
    const clearBtn = screen.getByRole('menuitem', { name: /clear/i });
    fireEvent.click(clearBtn);
    expect(change.prep.pop()).toBe(ALLFilters);
  });
});
