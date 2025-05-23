import React, { useState } from 'react';
import Header from './Header';

interface HeroSectionProps {
  quote: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText: string;
  page: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  quote,
  subtitle,
  ctaText,
  backgroundImage,
  page
}) => {
  const [email, setEmail] = useState('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  return (
    <section className="relative h-full flex flex-col">
      <Header page={page} />
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-[57%,0] object-cover redscale"
        aria-hidden="true"
      />
      <div className="max-w-[1440px] w-full mx-auto relative z-10 2xl:px-0 pt-[318px] sm:pt-[284px] pb-[40px] sm:pb-[100px] xl:px-24 lg:px-12 md:px-4 px-4">
        <div className="max-w-[500px] 2xl:max-w-[705px] flex flex-col gap-[40px] lg:gap-[80px] sm:gap-[40px] items-center">
          <div className="flex flex-col sm:gap-1 md:gap-2 lg:gap-5 items-center">
            <p className="mx-auto text-[32px] sm:text-[32px] lg:text-[48px] text-[#BDA77A] text-center uppercase font-serif font-semibold leading-[130%] tracking-[0.96px] px-[10px]">
              <span className="text-[48px] lg:text-[96px] sm:text-[48px] font-serif">
                {quote}
              </span>
              {title}
            </p>
            {subtitle && (
              <p className="text-[#F5F0EB] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-full text-center font-['Inter',sans-serif] leading-relaxed px-[10px] mt-[10px]">
                {subtitle.split('\n').map((text, idx) => (
                  <span key={idx}>
                    {idx !== subtitle.split('\n').length - 1
                      ? text.slice(0, -3)
                      : text}
                    <br />
                  </span>
                ))}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <input
              type="email"
              required
              placeholder="E-mail (required)"
              value={email}
              onChange={handleEmailChange}
              className="w-full border-b border-[#F5F0EB] h-[40px] bg-transparent py-2 px-0 text-2xl sm:text-3xl md:text-4xl text-white focus:outline-none focus:ring-0 placeholder:text-center placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base font-light transition-all duration-300"
            />
          </div>

          <button className="h-[59px] w-full text-center text-sm sm:text-base font-light bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent border-2 border-solid border-[#E8D8B9] p-2 hover:bg-gradient-to-r hover:from-[#E8D8B9] hover:to-[#BDA77A] hover:text-white hover:bg-clip-border transition-all duration-300">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
