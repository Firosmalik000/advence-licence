'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDocumentText, HiOutlineLightBulb } from 'react-icons/hi';
import { FaHandsHelping, FaShieldAlt, FaToolbox } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const services = [
  {
    title: 'Custom Licensing Program Development',
    icon: <HiOutlineLightBulb className="text-indigo-600 w-7 h-7" />,
  },
  {
    title: 'Legal & Operational Documentation',
    icon: <HiOutlineDocumentText className="text-blue-600 w-7 h-7" />,
  },
  {
    title: 'Sales Systems & Marketing Toolkits',
    icon: <FaToolbox className="text-yellow-600 w-7 h-7" />,
  },
  {
    title: 'Brand Protection & Licensing Strategy',
    icon: <FaShieldAlt className="text-green-600 w-7 h-7" />,
  },
  {
    title: 'Training & Support for Licensees',
    icon: <FaHandsHelping className="text-orange-600 w-7 h-7" />,
  },
  {
    title: 'Ongoing Advisory from Corporate Team',
    icon: <MdSupportAgent className="text-red-600 w-7 h-7" />,
  },
];

const Offer = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200">
            <div className="flex flex-col items-center justify-center gap-4">
              <div>{service.icon}</div>
              <p className="text-gray-800 text-base font-medium leading-snug">{service.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offer;
