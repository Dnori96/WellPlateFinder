## WellPlateFinder 🥗
Explore quick, healthy recipes.

[*Website*](https://well-plate-finder.vercel.app/)

### Frontend Mentor Challenge
Challenge [here](https://www.frontendmentor.io/challenges/recipe-finder-website--Ui-TZTPxN)

### Tech
- 🥶 [**React**](https://react.dev/)
- ⚡ [**Vite**](https://vite.dev/)
- 🔌 [**React Router 7**](https://reactrouter.com/)
- 🖌 [**Tailwind CSS**](https://tailwindcss.com/)
- 🧰 [**React Menu**](https://szhsin.github.io/react-menu/)
- 🧪 [**Vitest + Testing Library**](https://vitest.dev/)

### 🧰 Requirements
- Node 18+ (20 recommended)
- Package manager: npm.

### 📥 Install
```bash
npm install
```

### 📜 Scripts
```bash
npm run dev       # Start dev server
npm run lint      # Lint (exclude dist if desired)
npm test          # Run all tests (Vitest + jsdom)
```

### 🧪 Tests
- Config: `vite.config.js` (jsdom + setup file).
- Setup: `src/__tests__/setupTests.js` (jest-dom + asset mocks).
- Location: `src/__tests__/` (hooks, contexts, components, pages, utils).
- Coverage (optional): `npx vitest --coverage`.

### 📦 Minimal structure
```
src/
  App.jsx, main.jsx
  components/ (Header, Footer, Plate, MenuFilter,...)
  pages/ (Home, Recipes, RecipeInfo, About, NotFoundPage)
  context/ (pageContext, recipesContext)
  hooks/ (usePlateFilter)
  utils/ (diferentRecipes.js)
  lib/ (mock data, texts)
  __tests__/ (...tests)
```

### Aliases (Vite)
`@/` prefix (e.g. `@/components`, `@/pages`) defined in `vite.config.js`.

### Notes
- Images/SVG mocked in tests to avoid JSDOM issues.
- Exclude `dist/` from lint if noise appears.
- Add tests first when extending features.

### Future
- Adding Database to people add recipes or to have more recipes
- Adding *Themes*, *langs*, etc...

### Credits
- Challenge: [Frontend Mentor]()
- Icons: Flaticon (Freepik). 
- Menu: [React Menu](https://github.com/szhsin/react-menu).
---