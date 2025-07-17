import React, { useState } from 'react';
import { Page, MENU_ITEMS } from '../../types';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigateAndCloseMenu = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false); // 메뉴 클릭 시 모바일 메뉴 닫기
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigateAndCloseMenu('Home')}
          >
            {/* Logo Image */}
            <img src="image0.png" alt="Logo" className="w-12 h-12 mr-2" />
            {/* Text */}
            <span className="text-2xl font-bold text-green-600">CaF</span>
            <span className="text-2xl font-light text-slate-700 ml-2">AI Agent Platform</span>
          </div>
          {/* 변경: md:flex 이상에서 텍스트 사이즈를 text-xs에서 더 줄이고, 간격도 더 줄임 */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2"> {/* 간격 더 줄임 */}
            {MENU_ITEMS.map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavigateAndCloseMenu(item)}
                // 변경: 글자 크기를 더 줄이고, 배경색을 번갈아 적용
                className={`
                  font-medium transition-colors duration-200 ease-in-out
                  px-2 py-1 rounded-md
                  ${activePage === item
                    ? 'text-red-600 bg-red-50' // 활성 페이지는 동일
                    : index % 2 === 0 // 짝수 인덱스
                      ? 'text-slate-700 bg-gray-100 hover:text-red-600 hover:bg-red-100'
                      : 'text-slate-700 bg-white hover:text-red-600 hover:bg-gray-50' // 홀수 인덱스 (기본 흰색 유지 또는 미묘한 차이)
                  }
                  ${window.innerWidth < 1280 ? 'text-[0.65rem]' : 'text-xs'} {/* 화면 너비에 따라 글자 크기 동적 조절 */}
                `}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {MENU_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigateAndCloseMenu(item)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out ${
                  activePage === item
                    ? 'text-red-600 bg-red-50'
                    : 'text-slate-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;