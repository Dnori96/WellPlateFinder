import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] font-Primary w-full h-dvh">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
