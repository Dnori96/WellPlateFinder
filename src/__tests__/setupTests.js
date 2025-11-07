import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Stub static asset imports (svg/webp) used across the app for tests.
// Note: vi.mock calls are hoisted, so use inline factories instead of variables.
vi.mock('@/images/logo.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-hamburger-menu.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-chevron-down.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-search.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-servings.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-prep-time.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-cook-time.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-bullet-point.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-bluesky.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-instagram.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/icons/icon-tiktok.svg', () => ({ default: 'stub-asset' }));

vi.mock('@/images/heros/image-home-hero-large.webp', () => ({ default: 'stub-asset' }));
vi.mock('@/images/heros/image-home-hero-small.webp', () => ({ default: 'stub-asset' }));
vi.mock('@/images/heros/image-home-real-life-large.webp', () => ({ default: 'stub-asset' }));
vi.mock('@/images/heros/image-home-real-life-small.webp', () => ({ default: 'stub-asset' }));
vi.mock('@/images/heros/image-about-our-mission-large.webp', () => ({ default: 'stub-asset' }));
vi.mock('@/images/heros/image-about-our-mission-small.webp', () => ({ default: 'stub-asset' }));
vi.mock('@/images/heros/image-about-beyond-the-plate-large.webp', () => ({ default: 'stub-asset' }));
vi.mock('@/images/heros/image-about-beyond-the-plate-small.webp', () => ({ default: 'stub-asset' }));

vi.mock('@/images/figures/pattern-squiggle-1.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/figures/pattern-knife.svg', () => ({ default: 'stub-asset' }));
vi.mock('@/images/figures/pattern-fork.svg', () => ({ default: 'stub-asset' }));
