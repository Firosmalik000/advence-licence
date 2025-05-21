import About from '@/sections/About';
import Hero from '@/sections/Hero';
import Offer from '@/sections/Offer';
import Why from '@/sections/Why';

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Why />
        <Offer />
      </div>
    </>
  );
}
