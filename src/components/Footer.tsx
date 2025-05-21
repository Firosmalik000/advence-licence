'use client';

import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
        className="w-[90%] max-w-7xl bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 md:px-16 py-12 rounded-3xl shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Company Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }} className="flex flex-col gap-3 w-1/2">
            <h2 className="text-3xl font-bold">Advanced Licensing</h2>
            <p className="text-gray-300 text-base leading-relaxed">Your Gateway to National & International Expansion.</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex w-1/2 justify-center gap-x-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: false }} className="flex flex-col">
              <h2 className="text-xl font-semibold mb-4">Pages</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Portfolio', path: '/portofolio' },
                  { name: 'Why Licensing', path: '/licensing' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }} className="flex flex-col">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="flex items-start gap-3 text-sm text-gray-300 mb-3">
                <FaEnvelope className="mt-1" />
                <span>team@advancedlicensing.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <FaPhone className="mt-1" />
                <span>1-800-510-1342</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom line */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: false }} className="mt-12 border-t border-gray-700 pt-5 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Advanced Licensing. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
