
import HeroButtons from './HeroButtons';

export default function HeroContent() {
  return (
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
        Lunar I.T. Solution
        <br />
        For <span className='text-blue-600 animate-pulse'>Better Business</span>
      </h1>
      <p className="text-gray-600 text-sm sm:text-base mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
        Transform your business with our cutting-edge IT solutions designed for modern enterprises
      </p>
      <HeroButtons />
    </div>
  );
}