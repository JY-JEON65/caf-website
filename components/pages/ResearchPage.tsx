import React from 'react';

const ResearchPage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            연구 및 개발 (R&D)
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            혁신을 향한 끊임없는 노력
          </p>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="relative">
             <img className="h-56 w-full object-cover" src="image51.jpg" alt="Laboratory research"/>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-red-600">우리의 사명</h3>
            <blockquote className="mt-4">
              <p className="text-2xl font-medium text-slate-800">
                "혁신적인 제품과 보관 방법을 연구하고 구현하여 CA 보관 기술 분야에서 귀사의 최고 파트너가 되는 것입니다."
              </p>
            </blockquote>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-slate-800">공동 연구개발 파트너십</h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            CaF는 최고의 기술력을 유지하고 새로운 보관 솔루션을 개발하기 위해 유수의 기관과 협력합니다.
            국립농업과학원과의 공동 연구개발을 통해 과학적 근거에 기반한 최첨단 기술을 고객에게 제공합니다.
          </p>
          {/* 이미지 섹션 수정: Grid 레이아웃으로 변경 */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
            <img src="image52.png" alt="농촌진흥청 국립농업과학원" className="max-h-20 w-auto object-contain" />
            <img src="image53.jpg" alt="농촌진흥청 국립원예특작과학원" className="max-h-20 w-auto object-contain" />
            <img src="image54.jpg" alt="Van Amerongen CA techniek" className="max-h-20 w-auto object-contain" />
            <img src="image55.jpg" alt="CaF Cold&Fresh" className="max-h-20 w-auto object-contain" />
          </div>
          <p className="mt-4 text-base text-slate-600">
            CaF와 농업진흥청의 국립농업과학원, 국립원예특작과학원, 그리고 네덜란드의 Van Amerongen 이 만났습니다.
          </p>
        </div>

        <div className="mt-12 text-center">
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;