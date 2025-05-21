'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen bg-center bg-cover flex items-center justify-center px-4 sm:px-8" style={{ backgroundImage: `url(/image/hero.jpg)` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-white text-center max-w-screen-xl w-full">
        {/* Optional Subtitle */}
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-2xl sm:text-4xl md:text-5xl font-bold  mb-2 drop-shadow-lg">
          Advence Licence
        </motion.h2>

        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-2xl sm:text-4xl md:text-6xl font-bold  mb-4 leading-tight drop-shadow-lg">
          National Licensing Experts
        </motion.h1>

        <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-sm sm:text-base md:text-xl text-gray-200 drop-shadow-md px-4">
          Your Gateway to National & International Expansion
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
