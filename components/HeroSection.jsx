
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section className="hero flex items-center gap-10 mb-16">
      <div className="hero-text flex-1">
        <h1 className="text-3xl text-gray-800 font-bold mb-3">I'm Dorian García</h1>
        <h2 className="text-2xl text-gray-700 mb-5">Front-end Developer</h2>
        <h2 className="text-2xl text-gray-700 mb-5">x-ray Technologist</h2>
        <p className="hero-description text-gray-700 leading-relaxed mb-8">Passionate students web developer with 2 years of experience building responsive, user-friendly applications. Specialized in modern frameworks like React and Next.js, with a strong eye for design and performance optimization. Dedicated to writing clean, maintainable code and solving complex problems with elegant solutions.</p>
        <button className="hire-me-button bg-yellow-500 text-white font-bold py-3 px-6 rounded-md cursor-pointer transition-colors hover:bg-yellow-600">
          HIRE ME <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="hero-image-container flex-shrink-0 w-72 h-72 rounded-full overflow-hidden shadow-md">
        <img src="/images/dor.jpg" alt="Dorian García" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;