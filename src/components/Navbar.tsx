'use client';
import { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const classOptionNav = 'cursor-pointer font-semibold';

  return (
    <>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className={`fixed top-0 z-50 w-[90%] transition-all duration-500  mt-6 rounded-2xl
        ${isScrolled ? 'bg-white/60 text-black shadow-md backdrop-blur-md' : 'bg-white/60 text-black'}`}
        >
          <div className="container mx-auto flex items-center justify-between h-[60px] md:h-[80px] px-4 md:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Link href={'/'}>
                <Image src="/image/al.png" width={100} height={100} className=" w-full" alt="Logo" />
              </Link>
              {/* <p className="text-xl md:text-3xl font-bold font-sans">PT. Handira Minergi Nusantara</p> */}
            </div>

            <div className="hidden lg:flex items-center gap-x-4">
              <Link href="/howitwork" className={classOptionNav}>
                How It Works
              </Link>{' '}
              <Link href="/portofolio" className={classOptionNav}>
                Portofolio
              </Link>{' '}
              <Link href="/licensing" className={classOptionNav}>
                What is Licensing
              </Link>{' '}
              <Link href="/contact" className={classOptionNav}>
                Contact
              </Link>
            </div>

            <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <IoMenuSharp size={30} />}
            </button>
          </div>
        </motion.div>{' '}
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-gray-900/75 min-h-screen text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${
            isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          {/* Tombol Close */}
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors duration-300">
            <FaTimes size={28} />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6 text-xl text-center">
            <Link href="/howitwork" className={classOptionNav}>
              How It Works
            </Link>{' '}
            <Link href="/portofolio" className={classOptionNav}>
              Portofolio
            </Link>{' '}
            <Link href="/licensing" className={classOptionNav}>
              What is Licensing
            </Link>{' '}
            <Link href="/contact" className={classOptionNav}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
