import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import PageProvider from '@/context/pageContext';
import RecipesProvider from '@/context/recipesContext';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <RecipesProvider>
      <PageProvider>
        <div className="grid grid-rows-[auto_1fr_auto] font-Primary w-full h-dvh overflow-x-hidden bg-primary-Neutral-100">
          <Header />
          <Outlet />
          <Footer />
          <Analytics />
        </div>
      </PageProvider>
    </RecipesProvider>
  );
}
