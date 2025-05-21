'use client';

import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
        className="w-[90%] max-w-7xl bg-transparent text-black px-6 md:px-16 py-12 rounded-3xl shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Company Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }} className="flex flex-col gap-3 w-1/2">
            <Image src="/image/al.png" width={100} height={100} className=" w-[350px]" alt="Logo" />
            <p className="text- text-base leading-relaxed">Your Gateway to National & International Expansion.</p>
          </motion.div>

          {/* Navigation */}
          <div className="flex w-1/2 justify-center gap-x-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: false }} className="flex flex-col">
              <h2 className="text-xl font-semibold mb-4">Pages</h2>
              <ul className="space-y-2 text- text-sm">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Portfolio', path: '/portofolio' },
                  { name: 'Why Licensing', path: '/licensing' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="hover:text-black transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }} className="flex flex-col">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="flex items-start gap-3 text-sm text- mb-3">
                <FaEnvelope className="mt-1" />
                <span>team@advancedlicensing.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-">
                <FaPhone className="mt-1" />
                <span>1-800-510-1342</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom line */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: false }} className="mt-12 border-t border-gray-700 pt-5 text-center text-xs">
          &copy; {new Date().getFullYear()} Advanced Licensing. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
