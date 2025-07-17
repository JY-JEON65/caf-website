import React from 'react';

// public/MEDIA 폴더에 있는 PDF 파일 목록을 여기에 추가합니다.
// 파일이 추가될 때마다 이 배열을 업데이트해야 합니다.
const mediaFiles = [
  { name: 'CaF저장기술소개서_ver1.0', fileName: 'CaF저장기술소개서_ver1.0.pdf' },
  { name: 'Cold&Fresh_LAB_사업소개서', fileName: 'Cold&Fresh_LAB_사업소개서.pdf' },
  { name: 'HybridCA_brochure_CaF', fileName: 'HybridCA_brochure_CaF.pdf' },
  { name: '新한국형Ai-HybridCA장기비축저장기술_v3.0', fileName: '新한국형Ai-HybridCA장기비축저장기술_v3.0.pdf' },
  { name: '장기비축저장기술_요약서', fileName: '장기비축저장기술_요약서.pdf' },
];

const MediaPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">MEDIA 자료실</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaFiles.map((file, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              {/* 파일 이름이 그대로 노출되도록 name 속성을 fileName으로 변경 */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{file.name}</h2>
              <p className="text-gray-600 mb-4">파일: {file.fileName}</p>
              <a
                href={`media/${file.fileName}`} // public/MEDIA 폴더 경로를 가리킵니다.
                download
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                다운로드
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;