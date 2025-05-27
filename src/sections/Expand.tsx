// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (custom = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: custom * 0.35,
//       duration: 0.7,
//       ease: 'easeOut',
//     },
//   }),
// };

// const Expand = () => {
//   return (
//     <section className="relative bg-white py-28 px-6 max-w-7xl mx-auto overflow-hidden">
//       {/* Background shapes */}
//       <div className="absolute top-[-120px] left-[-120px] w-96 h-96 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-25 blur-3xl pointer-events-none animate-blob"></div>
//       <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-gradient-to-tr from-pink-400 via-yellow-400 to-red-400 rounded-full opacity-20 blur-2xl pointer-events-none animate-blob animation-delay-2000"></div>

//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
//         {/* Text content */}
//         <motion.div className="md:col-span-7 space-y-12 text-center md:text-left" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//           <motion.h1 custom={0} variants={fadeUp} className="text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 max-w-xl mx-auto md:mx-0">
//             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 cursor-pointer hover:brightness-110 transition-all duration-300">Expand</span> Your Business?
//           </motion.h1>

//           <motion.p custom={1} variants={fadeUp} className="text-xl text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
//             Businesses across the U.S. and beyond are sitting on scalable, replicable models—but most don’t know how to expand without losing control or breaking the bank.
//           </motion.p>

//           <motion.p custom={2} variants={fadeUp} className="text-2xl font-semibold text-gray-900 max-w-xl mx-auto md:mx-0">
//             Licensing is the solution.
//           </motion.p>

//           <motion.p custom={3} variants={fadeUp} className="text-md text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
//             We offer a <span className="font-semibold text-indigo-600">free initial intake consultation</span> to determine if licensing is right for your business. Whether you have an operating model or just an idea — we can help you
//             launch your brand across the country or globe.
//           </motion.p>
//         </motion.div>

//         {/* Right side decorative shape or image */}
//         {/* <motion.div className="md:col-span-5 flex justify-center md:justify-end" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }}>
//           <div className="w-64 h-64 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-600 rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500" />
//         </motion.div> */}
//         <div>
//           <Image src="/image/expand.jpg" alt="expand" width={500} height={500}></Image>
//         </div>
//       </div>

//       {/* Custom animation keyframes */}
//       <style>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(20px, -10px) scale(1.05);
//           }
//           66% {
//             transform: translate(-15px, 15px) scale(0.95);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Expand;
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.35,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const Expand = () => {
  return (
    <section className="relative bg-white py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-[-120px] left-[-120px] w-96 h-96 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-25 blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-gradient-to-tr from-pink-400 via-yellow-400 to-red-400 rounded-full opacity-20 blur-2xl pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Text content */}
        <motion.div className="md:col-span-7 space-y-12 text-center md:text-left" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.h1 custom={0} variants={fadeUp} className="text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 max-w-xl mx-auto md:mx-0">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 cursor-pointer hover:brightness-110 transition-all duration-300">Expand</span> Your Business?
          </motion.h1>

          <motion.p custom={1} variants={fadeUp} className="text-xl text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
            Businesses across the U.S. and beyond are sitting on scalable, replicable models—but most don’t know how to expand without losing control or breaking the bank.
          </motion.p>

          <motion.p custom={2} variants={fadeUp} className="text-2xl font-semibold text-gray-900 max-w-xl mx-auto md:mx-0">
            Licensing is the solution.
          </motion.p>

          <motion.p custom={3} variants={fadeUp} className="text-md text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            We offer a <span className="font-semibold text-indigo-600">free initial intake consultation</span> to determine if licensing is right for your business. Whether you have an operating model or just an idea — we can help you
            launch your brand across the country or globe.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div className="md:col-span-5 flex justify-center md:justify-end" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <div className="relative w-[400px] h-[300px] md:w-[600px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/image/expand.jpg" alt="Expand your business" fill className="object-cover " />
          </div>
        </motion.div>
      </div>

      {/* Custom animation keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -10px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Expand;
