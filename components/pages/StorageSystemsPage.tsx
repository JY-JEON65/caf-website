
// StorageSystemsPage.tsx
import React from 'react';
import Card from '../ui/Card';

interface StorageInfo {
  title: string;
  description: string;
  imageUrl: string;
}

const storageData: StorageInfo[] = [
  {
    title: "사과 (APPLES)",
    description: "낮은 CO2와 초저산소 값 제어로 경도와 신선함을 유지하여 최대 12개월 보관 가능. 전문가의 조언이 중요합니다.",
    imageUrl: "image61.jpg"
  },
  {
    title: "배 (PEARS)",
    description: "산소 및 CO2 함량 조절과 탈수 방지를 통해 'slack necks' 현상을 예방하며 최대 12개월까지 보관 가능합니다.",
    imageUrl: "image62.jpg"
  },
  {
    title: "블루베리 (BLUEBERRIES)",
    description: "CO2와 산소 농도를 정밀하게 조절하여 약 8~10주간 신선하게 보관. HybridCA 방식의 Pallet CA 시스템이 효과적입니다.",
    imageUrl: "image63.jpg"
  },
  {
    title: "붉은베리 (REDBERRIES)",
    description: "높은 CO2(18-20%)와 낮은 산소(2%)로 곰팡이 성장을 억제하여 최대 6-8개월 보관. HybridCA Pallet bags를 사용합니다.",
    imageUrl: "image64.jpg"
  },
  {
    title: "체리 (CHERRIES)",
    description: "HybridCA 보관을 통해 유통기한을 연장하고 곰팡이 성장을 억제합니다. 산소와 CO2 조건 조절이 핵심입니다.",
    imageUrl: "image65.jpg"
  },
  {
    title: "키위 (KIWIS)",
    description: "에틸렌에 매우 민감하므로, 에틸렌 함량을 0 PPB에 가깝게 가능한 한 낮게 유지하는 것이 보관의 핵심입니다.",
    imageUrl: "image66.jpg"
  },
  {
    title: "석류 (POMEGRANATE)",
    description: "수분 손실에 민감하여 좋은 냉각 설계가 중요하며, 3% O2와 6% CO2 조건에서 약 5-6°C로 6-7개월까지 보관 가능합니다.",
    imageUrl: "image67.jpg" // 적절한 이미지 URL로 변경 필요
  },
  {
    title: "망고 (MANGO)",
    description: "품질에 따라 13°C, 3-5% O2 및 5-8% CO2 조건에서 약 4-6주 보관 가능하며, 숙성은 에틸렌으로 가속화할 수 있습니다.",
    imageUrl: "image68.jpg" // 적절한 이미지 URL로 변경 필요
  },
  {
    title: "복숭아, 살구, 자두 (PEACHES, APRICOTS, PLUMS)",
    description: "빠른 냉각이 필요하며, 낮은 산소는 경도 유지에, 높은 CO2는 곰팡이 성장을 억제합니다. HybridCA Pallet bag 시스템으로 소량 보관에 적합합니다.",
    imageUrl: "image69.jpg" // 적절한 이미지 URL로 변경 필요
  },
  {
    title: "포도 (GRAPES)",
    description: "보트리티스균에 민감하여 SO2 처리하기도 하며, 2-3% CO2 및 2-5% O2, -0.5-0°C에서 약 2-4개월 보관 가능합니다.",
    imageUrl: "image70.jpg" // 적절한 이미지 URL로 변경 필요
  },
  {
    title: "양배추 및 기타 야채 (CABBAGE & OTHER VEGETABLES)",
    description: "CA/ULO 조건에서 최대 8개월 보관 가능하며, 0-0.5°C, 1-2% O2, 2-3% CO2 조건이 사용됩니다.",
    imageUrl: "image71.jpg" // 적절한 이미지 URL로 변경 필요
  },
  {
    title: "양파 (ONIONS)",
    description: "발아 억제제 사용 제한으로 CA 저장이 중요하며, 건조 후 1% O2, 1-2% CO2, 60-70% 이하의 낮은 습도에서 보관합니다.",
    imageUrl: "image72.jpg" // 적절한 이미지 URL로 변경 필요
  }
];

const StorageSystemsPage: React.FC = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            품목별 최적 저장 시스템
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            각 과일과 채소의 특성에 맞는 최적의 Hybrid DCA 저장 조건을 알아보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storageData.map((item) => (
            <Card key={item.title} title={item.title} imageUrl={item.imageUrl}>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-800">그 외 품목</h3>
            <p className="mt-4 text-slate-600">
                천마, 사과대추, 만감류, 감자, 고구마, 딸기, 메론 등 다양한 채소와 과일의 CA 저장 솔루션도 제공합니다. <br/> 자세한 내용은 문의 바랍니다.
            </p>
        </div>
      </div>
    </div>
  );
};

export default StorageSystemsPage;
