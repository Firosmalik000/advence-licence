'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Why = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Licensing?</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            If you’ve built a successful business—or even have a strong business concept— people across the country or globe may want to replicate it. At <span className="font-semibold text-gray-900">Advanced Licensing</span>, we help you
            turn your success into a scalable system, allowing others to license your brand while you maintain ownership and grow strategically.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">Unlike franchising or trying to do it all yourself, our proven licensing system is a cost-effective, streamlined path to national or international expansion.</p>
        </div>

        {/* Video Section */}
        <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
          <iframe src="https://player.vimeo.com/video/1072715206" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen className="absolute top-0 left-0 w-full h-full" title="Why Licensing Video"></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Why;
