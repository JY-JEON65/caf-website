
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-slate-900">
        <div className="absolute inset-0">
          <img
          className="w-full h-full object-cover"
          src="image1.jpg" // public 폴더 내의 이미지 파일
          alt="Fresh apples in storage"
          />
          <div className="absolute inset-0 bg-slate-800 bg-opacity-50 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl">
            최고의 품질을 위한 CAF Hybrid DCA Technology
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-200">
            완벽하게 제어된 공기저장을 위한 완전하고 혁신적인 솔루션
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-red-600 tracking-wide uppercase"> Our Mission </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              신선함을 넘어, 가치를 보관합니다
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              CaF는 과일 및 채소 보관을 위한 Unique 솔루션을 제공하며 Dynamic Controlled Atmosphere 분야의 세계 최고 리더로 발돋움하고 있습니다.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">사과 12개월 보관</h3>
                    <p className="mt-5 text-base text-gray-500">
                      최첨단 DCA 기술을 통해 사과의 아삭함과 신선함을 최대 12개월까지 유지하여, 언제나 최상의 맛을 즐길 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">배추 6개월 보관</h3>
                    <p className="mt-5 text-base text-gray-500">
                      김장철이 아니더라도 신선한 배추를 공급할 수 있도록, 최대 6개월간 품질 저하 없이 배추를 보관하는 기술을 보유하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
