'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const listItems = ['Decades of experience', 'Turnkey licensing systems', 'Personalized advisory and support'];

const cardColors = ['bg-gradient-to-br from-green-100 to-green-200', 'bg-gradient-to-br from-blue-100 to-blue-200', 'bg-gradient-to-br from-yellow-100 to-yellow-200'];

const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto px-6 py-12">
      <div className="p-8">
        <p className="text-gray-700 text-lg text-center leading-relaxed mb-10">
          <span className="font-semibold text-gray-900">Advanced Licensing</span> is a national firm specializing in business expansion through licensing—a proven, cost-effective alternative to franchising or the DIY method.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listItems.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * index }}>
              <Card className={`flex flex-col items-center justify-center text-center h-40 min-w-[200px] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ${cardColors[index]}`}>
                <CheckCircle className="text-green-600 w-8 h-8 mb-3" />
                <CardContent className="p-0 text-gray-800 text-base font-medium">{item}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
