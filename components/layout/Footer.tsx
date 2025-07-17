
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">CaF Cold & Fresh</h3>
            <p className="mt-2 text-sm text-slate-300">
              최고의 품질을 위한 혁신적인 Hybrid DCA 저장 기술
            </p>
          </div>

<div className="flex justify-end">
  <div>
    <h3 className="text-lg font-semibold">Patner Link</h3>
    <ul className="mt-2 text-sm text-slate-300 space-y-1">
      <li><a href="https://caflab.my.canva.site/cafkr" target="_blank" className="hover:text-red-400 transition-colors">CaF Management</a></li>
      <li><a href="https://jy-jeon65.github.io/CaF.kr" target="_blank" className="hover:text-red-400 transition-colors">CaF Technology</a></li>
    </ul>
  </div>
</div>

        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} by Hybrid DCA AI Agent Platform by Agricultural Corporation CaF Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
