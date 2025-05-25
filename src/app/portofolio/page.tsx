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

const portfolioItems = [
  {
    title: 'MainStreetChamber of Commerce',
    description: 'Started expanding in 2007 and opened 171 local chapters and gained 200,000+ members.',
  },
  {
    title: 'iDealFurniture',
    description: 'Started expansion in 2012 and opened 320 locations across the US.',
  },
  {
    title: 'Dirty Laundry Solutions',
    description: 'Sold the first license in June 2020 and has sold over 140 licenses and raised over $6M.',
  },
  {
    title: 'WhiteGlove4Less',
    description: 'Sold over $2M in licenses in 1 year.',
  },
];

const projects = [
  { title: 'Green Bin® kathy ireland®', image: '/image/1.png' },
  { title: 'ireland pay®', image: '/image/2.png' },
  { title: 'kathy ireland® Furniture Factory', image: '/image/3.png' },
  { title: 'kathy ireland® Laundry', image: '/image/4.png' },
  { title: 'kathy ireland® Logistics', image: '/image/5.jpeg' },
  { title: 'DUCTS Air Duct Cleaning, Inc™', image: '/image/6.png' },
  { title: 'Dude, I Need A Truck', image: '/image/7.png' },
  { title: 'The eBike Shop', image: '/image/8.png' },
  { title: 'ReadyLockers.com', image: '/image/9.png' },
  { title: 'Aloha Mini Glow Golf', image: '/image/10.jpg' },
  { title: 'German Kitchen Center', image: '/image/11.jpeg' },
  { title: 'MainStreetChamber of Commerce', image: '/image/c.png' },
];

const PortofolioPage = () => {
  return (
    <section className="relative mt-12 bg-white py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Elegant background accents */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 opacity-30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-pink-100 via-indigo-100 to-purple-100 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Title */}
      <motion.div className="text-center mb-10 relative z-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Portfolio</span>
        </h2>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">Success Snapshot — discover how these businesses scaled through smart licensing.</p>
      </motion.div>

      {/* Portfolio cards */}
      <div className="grid gap-12 md:grid-cols-2 relative z-10 mb-12">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative bg-white p-8 rounded-2xl border-l-4 border-indigo-500/70 shadow-xl transition duration-300 hover:shadow-2xl group"
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3 group-hover:underline decoration-pink-500/50 underline-offset-4">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative bg-white p-8 rounded-2xl border-l-4 shadow-xl transition duration-300 hover:shadow-2xl "
          >
            {/* Tambahkan wrapper div untuk mengatur tinggi */}
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
              <Image src={item.image || '/placeholder-image.png'} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px" />
            </div>
            <h3 className="text-2xl text-center font-semibold text-indigo-700 mb-3">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortofolioPage;
