import { motion } from "framer-motion";

import { styles } from "../styles";
import developerSetup from "../assets/developer-setup.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-[#0a0416]`}>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        {/* Moving stars background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute ${i % 3 === 0 ? 'w-2 h-2' : 'w-1 h-1'} ${i % 5 === 0 ? 'bg-white' : 'bg-[#915EFF]'} rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2,
                filter: `blur(${i % 3 === 0 ? '1px' : '0px'})`
              }}
            />
          ))}
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ananya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 opacity-90`}>
            Computer Science student at <br className='sm:block hidden' />
            <span className="font-semibold text-[#915EFF]">University of Waterloo</span>
          </p>
          <div className="mt-5">
            <a
              href="#contact"
              className="inline-block bg-[#915EFF] hover:bg-[#7d4ed4] text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-md shadow-primary"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-[220px] left-0 right-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-2xl mx-auto relative">
          <img
            src={developerSetup}
            alt="Developer Setup"
            className="w-full h-auto object-contain rounded-lg"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(145, 94, 255, 0.3))',
              transform: 'scale(0.65)',
              opacity: 0.95
            }}
          />
        </div>
      </div>


    </section>
  );
};

export default Hero;