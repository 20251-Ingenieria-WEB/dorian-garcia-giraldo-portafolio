
import PortfolioItem from './PortfolioItem';

const PortfolioSection = () => {
  return (
    <section className="portfolio mb-16">
      <h2 className="text-2xl text-gray-800 font-bold mb-4 text-center">Portfolio</h2>
      <p className="section-description text-gray-700 leading-relaxed mb-8">Here are some of my recent projects. Click on a project to learn more..</p>
      <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        <PortfolioItem
          image="/images/bussines.jpg"
          title="Proyecto_covid https://github.com/Dor00/proyecto_Covid"
          description="COVID detection using CNN (convolutional neural network) through Chest X-rays via Telegram."
          link="https://github.com/Dor00/proyecto_Covid"
        />
        <PortfolioItem
          image="/images/bussines.jpg"
          title="image compression https://github.com/Dor00/imageCompression"
          description="Final project on mobile computing 2024-2, group 01. Program for mobile devices that can reduce image weight.."
          link="https://github.com/Dor00/imageCompression"
        />
      </div>
    </section>
  );
};

export default PortfolioSection;