'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.25,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const LicensingPage = () => {
  return (
    <section className="relative bg-white py-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Gradient Background Accents */}
      <div className="absolute -top-48 -left-48 w-[700px] h-[700px] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-30 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="flex  items-center justify-center mt-10 w-full">
        <Image src="/image/licencing.jpg" alt="expand" width={500} height={500} className="rounded-xl shadow-xl object-cover" />
      </div>
      {/* Main Content Area */}
      <motion.div className="mt-4 relative z-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {/* Page Title */}
        <motion.h1 custom={0} variants={fadeUp} className="mb-10 text-center text-5xl  font-extrabold text-gray-900 leading-tight tracking-tight">
          Unlocking the Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Licensing</span>
        </motion.h1>
        {/* What is Licensing? Section */}
        <motion.div custom={1} variants={fadeUp} className="text-base text-gray-700 leading-relaxed space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Licensing</span>?
          </h2>
          <p className="indent-6">
            Think of <strong>licensing</strong> as renting out the rights to something you own. Instead of selling it outright, you grant someone else permission to use your intellectual property under specific terms, while you retain full
            ownership.
          </p>
          <p className="indent-6">
            For instance, imagine you own a wildly popular burger recipe. Instead of opening restaurants everywhere yourself, you allow other businesses to use your recipe, brand name, and logo in exchange for a fee or a percentage of their
            sales. They get to operate their own burger joint under your established brand, and you generate income without the extensive operational overhead.
          </p>
          <p className="indent-6">
            This is the essence of how licensing operates in the business world—it empowers others to legally leverage a brand, product, or idea, while the original owner maintains control and enjoys financial benefits.
          </p>
        </motion.div>
        ---
        {/* Why Licensing? Section */}
        <motion.div custom={2} variants={fadeUp} className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Licensing</span>?
          </h2>
          <p className="indent-6 text-base text-gray-700 leading-relaxed">
            Licensing is increasingly becoming the preferred alternative to traditional franchising, primarily due to <strong>cost-effectiveness and fewer regulatory burdens</strong>. Many entrepreneurs find traditional franchise contracts
            overly restrictive, often controlling nearly every aspect of their operations and demanding substantial gross royalties from their revenue.
          </p>
          <p className="indent-6 text-base text-gray-700 leading-relaxed">
            In stark contrast, <strong>licensees can often generate profits and revenue streams almost immediately</strong>, whereas many franchises take years to break even. Licensing offers a significant degree of freedom, flexibility,
            and a notably faster path to return on investment.
          </p>
        </motion.div>
        ---
        {/* The Booming Industry Section */}
        <motion.div custom={3} variants={fadeUp} className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Licensing</span> Industry is Booming!
          </h2>
          <p className="indent-6 text-base text-gray-700 leading-relaxed">
            As more baby boomers transition into retirement, many are discovering <strong>&apos;Master Licensing&apos;</strong> as a compelling avenue for passive wealth generation. For active entrepreneurs, licensing presents a **low-risk
            strategy to escape the corporate grind** and build their own ventures.
          </p>
          <p className="indent-6 text-base text-gray-700 leading-relaxed">
            Due to its proven track record of success, a growing number of small businesses are embracing licensing to achieve national expansion and potentially become household names. Licensing has fueled rapid business growth, yet the{' '}
            <strong>license agent industry remains vastly underserved</strong>, unlike the oversaturated franchising market.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LicensingPage;
