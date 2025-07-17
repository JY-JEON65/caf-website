
import React from 'react';
import Card from '../ui/Card';
import { CheckIcon } from '../ui/Icon';

const ProductListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <CheckIcon className="flex-shrink-0 h-5 w-5 text-red-500 mt-1" />
    <span className="ml-2 text-slate-600">{children}</span>
  </li>
);

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            최적의 저장을 위한 Hybrid DrCA 제품
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            세계적으로 입증된 CaF의 혁신적인 제품 라인업을 만나보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card title="CO2 SCRUBBERS" imageUrl="image11.jpg">
            <ul className="space-y-3">
              <ProductListItem>검증된 스마트하고 견고한 디자인</ProductListItem>
              <ProductListItem>O2/CO2 분석기 내장</ProductListItem>
              <ProductListItem>ColdFresh App을 통한 원격 제어</ProductListItem>
              <ProductListItem>에틸렌 및 휘발성 물질 제거 기능</ProductListItem>
            </ul>
          </Card>
          <Card title="N2-PSA GENERATORS" imageUrl="image12.jpg">
            <ul className="space-y-3">
              <ProductListItem>에너지 효율성 극대화 (최대 30% 절약)</ProductListItem>
              <ProductListItem>낮은 유지 보수 비용</ProductListItem>
              <ProductListItem>2개의 CMS 활성탄 통을 이용한 안정적 작동</ProductListItem>
              <ProductListItem>저압 블로워 및 진공 사용으로 안전성 확보</ProductListItem>
            </ul>
          </Card>
          <Card title="ETHYLENE REMOVAL (CEC)" imageUrl="image13.jpg">
            <p className="mb-4">촉매 에틸렌 변환기(CEC)는 과일 숙성 및 곰팡이 성장을 억제하여 보관 품질을 극대화합니다.</p>
             <ul className="space-y-3">
              <ProductListItem>250°C 가열을 통한 효율적인 에틸렌 전환</ProductListItem>
              <ProductListItem>에너지 스윙 원리 적용으로 낮은 에너지 소모</ProductListItem>
              <ProductListItem>필터 소재 교체 불필요</ProductListItem>
            </ul>
          </Card>
          <Card title="CA STORAGE ACCESSORIES" imageUrl="image14.jpg">
            <p className="mb-4">완벽한 CA 환경 구축을 위한 필수 부속품들을 제공합니다.</p>
             <ul className="space-y-3 text-sm">
                <ProductListItem>Combi/Hand meters, Flexible air buffers (‘lungs’)</ProductListItem>
                <ProductListItem>과압/저압 valve, Cell valves</ProductListItem>
                <ProductListItem>초음파 가습 및 역삼투 전처리 설비</ProductListItem>
                <ProductListItem>Water management 시스템</ProductListItem>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
