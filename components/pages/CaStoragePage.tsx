import React from 'react';
import { CheckIcon } from '../ui/Icon';

const InfoPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
        <CheckIcon className="h-6 w-6" />
      </div>
    </div>
    <div className="ml-4">
      <p className="text-lg leading-6 font-medium text-gray-900">{children}</p>
    </div>
  </div>
);

const CaStoragePage: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-red-600 tracking-wide uppercase">The Science of Freshness</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            CA (Controlled Atmosphere) 저장 기술
          </p>
          {/* whitespace-nowrap 제거 */}
          <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
            DCA 저장은 과일과 채소의 숙성을 막아 맛과 품질을 자연 그대로 보존하는 과학적인 방법입니다.
          </p>

        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <InfoPoint>
                산소, CO2, 에틸렌 농도 및 수분 손실을 정밀하게 조절하여 농산물의 호흡을 늦춥니다.
            </InfoPoint>
            <InfoPoint>
                Dynamic Controlled Atmosphere (DCA) 기술은 제품의 상태에 실시간으로 반응하여 보관 기간을 극대화합니다.
            </InfoPoint>
            <InfoPoint>
                CO2 수준을 높여 곰팡이 성장을 억제하고 부패를 감소시켜 상품성을 유지합니다.
            </InfoPoint>
            <InfoPoint>
                농산물의 호흡 과정 (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy)을 늦춰 영양소 파괴를 최소화합니다.
            </InfoPoint>
          </dl>
        </div>

        <div className="mt-12 text-center">
            <img src="image41.jpg" alt="Fresh vegetables" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default CaStoragePage;