import React, { useState, useCallback } from 'react';
import { Page, MENU_ITEMS } from './types';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import DesignConstructPage from './components/pages/DesignConstructPage';
import ProjectsPage from './components/pages/ProjectsPage';
import CaStoragePage from './components/pages/CaStoragePage';
import ResearchPage from './components/pages/ResearchPage';
import StorageSystemsPage from './components/pages/StorageSystemsPage';
import AboutUsPage from './components/pages/AboutUsPage'; // 새 페이지 import
import MediaPage from './components/pages/MediaPage';     // 새 페이지 import

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(MENU_ITEMS[0]);

  const handlePageChange = useCallback((page: Page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage />;
      case 'Products':
        return <ProductsPage />;
      case 'Design & Construct':
        return <DesignConstructPage />;
      case 'Projects':
        return <ProjectsPage />;
      case 'CA storage':
        return <CaStoragePage />;
      case 'Research & Development':
        return <ResearchPage />;
      case 'Storage systems':
        return <StorageSystemsPage />;
      case 'ABOUT US': // 새 페이지 렌더링
        return <AboutUsPage />;
      case 'MEDIA': // 새 페이지 렌더링
        return <MediaPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header activePage={activePage} onNavigate={handlePageChange} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;