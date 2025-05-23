import React, { useState } from 'react';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  btnName: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  backgroundImage,
  btnName
}) => {
  const [email, setEmail] = useState('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  return (
    <section className="relative py-10 sm:py-20">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 redscale"
        aria-hidden="true"
      />
      <div className="relative flex flex-col w-full items-center gap-[40px] sm:gap-[80px]">
        <div className="flex flex-col items-center max-w-[353px] sm:max-w-[850px]">
          <p className="text-center font-lora sm:font-lora text-[16px] sm:text-[40px] sm:leading-[51px] bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent max-w-[997px] uppercase tracking-[0.05em] px-2 sm:px-[80px] pt-[20px] mb-[10px]">
            {title}
          </p>
          {subtitle ? (
            <p
              className="text-center text-[14px] sm:text-[20px] leading-[17px] sm:leading-[24px] font-inter max-w-[560px] text-[#F5F0EB] px-0"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col gap-10 sm:gap-20 px-5 sm:px-[0] w-full max-w-[560px]">
          <input
            type="email"
            required
            placeholder="E-mail (required)"
            value={email}
            onChange={handleEmailChange}
            className="w-full border-b border-[#F5F0EB] h-[27px] sm:h-[29px] bg-transparent px-0 text-[16px] text-white focus:outline-none focus:ring-0 placeholder:text-center placeholder:text-base font-light font-inter"
          />
          <button className="btn-primary md:self-auto h-[59px] w-full text-center text-base font-light font-inter bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent border-1 border-solid border-[#E8D8B9] p-2 hover:bg-gradient-to-r hover:from-[#E8D8B9] hover:to-[#BDA77A] hover:text-white hover:bg-clip-border uppercase">
            {btnName}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
