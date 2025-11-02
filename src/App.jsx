import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router-dom';
import PageProvider from '@/context/pageContext';

export default function App() {
  return (
    <PageProvider>
      <div className="grid grid-rows-[auto_1fr_auto] font-Primary w-full h-dvh overflow-x-hidden bg-primary-Neutral-100">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </PageProvider>
  );
}
