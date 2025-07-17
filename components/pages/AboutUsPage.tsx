import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(batang1.jpg)', // batang1.jpg만 사용
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat', // 반복이 필요 없으면 주석 해제하거나 제거
      }}
    >
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12" style={{ textAlign: 'left' }}>
        ABOUT US
      </h1>

      {/* 회사 소개 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ textAlign: 'left' }}>
          회사 프로필
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'left' }}>
          저희 CaF(Cold & Fresh)를 소개하게 되어 매우 기쁩니다. 저희는 농산물의 고품질 장기 비축 보관 분야를
          전문으로 하는 회사입니다.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'left' }}>
          저희 회사는 2012년부터 CJ 비비고 김치와 대상 종가집에 절임배추를 OEM 납품하는 업체의 계열사로
          원물인 배추를 주로 사용되고 있는 화학적인 보관기술이 아닌 통제된 공간에서 공기를 조절하여 보관하는
          프로젝트를 실현해 왔습니다.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'left' }}>
          CaF는 그간 축적된 배추 보관기술을 바탕으로 “HybridCA” 이름으로 보관사업 분야를 전문화하고 세계
          표준에 따라 CA에서 장기 비축 보관 프로젝트를 실현하는 데 최선을 다하기로 결정했습니다.
        </p>
      </section>

      {/* HybridCA 저장고 섹션 */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-red-600 mb-6" style={{ textAlign: 'left' }}>
        세계 최고의 HybridCA 저장고
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-2" style={{ textAlign: 'left' }}> {/* max-w-2xl mx-auto 클래스 제거 및 text-left 추가 */}
        <li>10년 이상의 경험</li>
        <li>제어된 공기조절의 혁신으로 시장을 선도하다</li>
        <li>국내뿐 아니라 해외에서 프로젝트 진행</li>
        <li>HybridCA STORAGE SYSTEM을 위한 맞춤형 제안</li>
      </ul>
    </section>

      {/* 당사의 사명 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ textAlign: 'left' }}>
          당사의 사명
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'left' }}>
          당사의 사명은 혁신적인 제품과 보관 방법을 연구하고 구현하여 CA 보관 기술 분야에서 귀사의 최고
          파트너가 되는 것입니다.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'left' }}>
          귀사의 제품을 고품질로 보관하기 위한 최상의 솔루션을 소개합니다. CaF는 공기가 통제된 창고에서
          제품을 보관하기 위한 완전한 장비 세트를 제공합니다.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'left' }}>
          저희 회사의 전문가들은 유럽본사에서 전문적인 기술교육을 받았으며, 과일과 채소의 장기 및 비축을
          위한 저장고 구축, 장비 설치, 장비운영 및 유지 보관에 대한 모든 문제와 질문에 대해 최고 수준에서
          도움을 드릴 수 있습니다.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'left' }}>
          저희 전문가들은 장비설치 작업의 혁신적인 방법과 신뢰성이 인증된 유지 관리 작업을 제공합니다. CaF에서
          인증된 최고의 장비를 제공하며, 이를 통해 장기 비축보관에 가장 현대적인 기술을 사용할 수 있습니다.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed" style={{ textAlign: 'left' }}>
          질소 발생기, CO2 스크러버, 에틸렌 변환기, 창고의 기밀화, 저장고를 위한 복잡한 솔루션, 동적 제어 시스템
          - DCS 그리고 HybridCA 기술을 접목한 저장창고 건설 및 재건축
        </p>
      </section>

      {/* 절임배추 시설 현황 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">◇ 절임배추 시설 현황</h2>
        <div className="overflow-x-auto w-3/4 mx-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">내용</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구분</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">내용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">회사설립</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2012년 10월</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">업태</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">제조업</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">회사명</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">농업회사법인 씨엔에프 주식회사</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">종목</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">김치.절임류</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">이사장</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">전미숙 (한국명인회 김치명인)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">대표자명</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">이용덕</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">브랜드명</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">선비촌 김치</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">사업장주소</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">경상북도 영주시 문수면 권선리 833번지</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">전화</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">054-631-9449</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">FAX</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02-6935-1837</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 저장 시설 현황 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">◇ 저장 시설 현황</h2>
        <div className="overflow-x-auto mb-4 w-1/2 mx-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">대지</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">건축면적</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7780.9m²</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3864.24m²</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-8 w-1/2 mx-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작업장</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">저온창고</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">숙성실</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">폐수처리</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">사무실</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1822m²</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1468m²</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">430m²</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1일 150t</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">128m²</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src="haccp.png" alt="HACCP 인증" className="h-24" />
            <p className="text-xl font-semibold text-gray-800">식약처 HACCP 지정업소</p>
        </div>
      </section>

      {/* 인원 및 차량 현황 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">◇ 인원 및 차량 현황</h2>
        <div className="overflow-x-auto w-1/2 mx-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">생산</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">품질</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">운송</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">계</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">비고</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">비정규 40</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto w-1/2 mx-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">냉동탑차</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">수량</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">승합차</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">수량</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3개년 매출 섹션 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">◇ 3개년 매출</h2>
        <p className="mt-4 text-xl font-semibold text-gray-700 text-center">
            2022년 120억 / 2023년 100억 / 2024년 105억
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;