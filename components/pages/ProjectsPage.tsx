
import React from 'react';
import Card from '../ui/Card';

const ProjectsPage: React.FC = () => {
  const projects = [
    { title: "현대식 DCA 창고 시스템", imageUrl: "image31.jpg" },
    { title: "HybridCA 100톤 규모의 블루베리 저장고", imageUrl: "image32.jpg" },
    { title: "야채 & 배추 DCA창고 시스템", imageUrl: "image33.jpg" },
    { title: "약 50개 팔레트 규모의 블루베리 Hybrid CA 창고", imageUrl: "image34.jpg" },
    { title: "개별 PalletCA저장을 이용한 레드베리 HybridCA 장기 저장 시스템", imageUrl: "image35.jpg" }
  ];

  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            성공적인 프로젝트 사례
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            CaF의 기술력과 전문성을 입증하는 다양한 프로젝트들을 확인해보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} title={project.title} imageUrl={project.imageUrl}>
              <p>CaF의 혁신적인 기술이 적용된 성공적인 저장 솔루션입니다.</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
