'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaRegComments, FaTools, FaRocket, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    title: 'Free Intake Consultation',
    description: "Let's evaluate your model and timing.",
    icon: <FaRegComments className="text-blue-600 w-7 h-7" />,
    color: 'bg-blue-100',
  },
  {
    title: 'Build Your Licensing Package',
    description: 'We create all systems, branding, and support tools.',
    icon: <FaTools className="text-indigo-600 w-7 h-7" />,
    color: 'bg-indigo-100',
  },
  {
    title: 'Go to Market',
    description: 'We help you attract licensees and close deals.',
    icon: <FaRocket className="text-green-600 w-7 h-7" />,
    color: 'bg-green-100',
  },
  {
    title: 'Support and Grow',
    description: 'Our team remains your partner as you scale.',
    icon: <FaHandshake className="text-yellow-600 w-7 h-7" />,
    color: 'bg-yellow-100',
  },
];

const Work = () => {
  return (
    <section className=" py-32 px-6 flex flex-col md:flex-row  items-center justify-center ">
      {/* Header */}
      <div className="max-w-xl text-center md:text-left pb-8 mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">How It Works</h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">Our experienced team guides you through each step of turning your business into a scalable, licensed opportunity.</p>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-6 max-w-xl w-full mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`rounded-3xl shadow-lg p-7 flex items-start gap-5 border border-transparent hover:border-gray-300 transition-all duration-300 cursor-pointer ${step.color}`}
          >
            <div className="bg-white p-4 rounded-full shadow-md flex items-center justify-center">{step.icon}</div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-700 mt-2 text-sm leading-snug">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
