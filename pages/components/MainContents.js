import React from 'react';
import HeroSection from './HeroSection';
import MyKnowledgeSection from './MyKnowledgeSection';
import EducationSection from './EducationSection';
import PortfolioSection from './PortfolioSection';



const MainContents = () => {
  return (
    //<div className="w-3/5 p-6 h-screen overflow-y-auto">      
    <div className="w-full md:w-3/5 bg-gray-50 p-4 md:p-6 h-auto min-h-[50vh] md:h-screen overflow-y-auto">
        <HeroSection />
        <MyKnowledgeSection />
        <EducationSection />
        <PortfolioSection />

    </div>
  );
};

export default MainContents;