
import React from 'react';

const ServiceItem: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
    <p className="mt-2 text-slate-600">{description}</p>
  </div>
);

const DesignConstructPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-red-600 tracking-wide uppercase">Total Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            설계부터 시공까지, 완벽한 파트너
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            농산물 고품질 장기 비축 보관 전문 회사 CaF는 2012년부터 축적된 경험과 HybridCA 기술을 바탕으로 세계 표준의 프로젝트를 실현합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceItem 
            title="CA Installation"
            description="고객의 특정 요구사항에 완벽하게 부합하는 맞춤형 CA 설치를 설계하고 구현합니다." 
          />
          <ServiceItem 
            title="가스 차단 밀폐용 DOOR"
            description="최적의 재료, 씰, 도어를 사용하여 완벽한 가스밀폐 환경을 보장합니다." 
          />
          <ServiceItem 
            title="가스 기밀 처리"
            description="패널 연결부, 관통부 등 모든 지점의 가스 밀폐를 고품질 재료로 처리하고 테스트를 지원합니다." 
          />
          <ServiceItem 
            title="냉각 저장 시스템"
            description="시설에 최적화된 냉장 계획을 수립하고, 가장 효율적인 냉각 시스템 및 장비를 선택하여 설치합니다." 
          />
          <ServiceItem 
            title="창고 유지보수 계획"
            description="저장 시설의 장기적인 성능 유지를 위한 체계적인 유지보수 계획을 제공합니다." 
          />
          <ServiceItem 
            title="엔지니어링 설계"
            description="보관 구역, 분류 시설, 운송, 사무실까지 포함한 완전한 보관 창고의 계획과 설계를 지원합니다." 
          />
        </div>
        
        <div className="mt-16 bg-red-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-red-800">프로젝트 문의</h3>
            <p className="mt-4 text-red-700">
                혁신적인 보관 솔루션이 필요하신가요? 지금 바로 CaF 전문가와 상담하세요.
            </p>
            <p className="mt-2 text-slate-600"><strong>연락처:</strong> 농업회사법인 CaF 주식회사 / 국립농업과학원 (공동 연구개발)</p>
        </div>
      </div>
    </div>
  );
};

export default DesignConstructPage;
