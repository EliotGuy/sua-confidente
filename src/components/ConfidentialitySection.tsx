import React from 'react';

const ConfidentialitySection: React.FC = () => {
  return (
    <section className="py-20 sm:pt-[211px] sm:pb-[238px] bg-confidente-black">
      <div className="flex flex-col items-center gap-10 sm:gap-[171px] mx-[20px] sm:mx-0">
        <p className="text-center font-lora text-[32px] sm:text-[64px] leading-[41px] sm:leading-[82px] bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent max-w-[1370px]">
          CONFIDENCIALIDADE ABSOLUTA, PORQUE ELEGÂNCIA COMEÇA NO SILÊNCIO.
        </p>

        <div className=" flex text-white w-full justify-center max-w-[1370px]">
          <div className="flex flex-col w-full max-w-[882px] sm:flex-row px-5 leading-none justify-between">
            <div className="flex flex-row text-xl max-w-[704px] text-[16px] sm:text-[24px] font-inter gap-3 leading-[29px] items-start mb-[30px] sm:mb-0">
              &bull;
              <p>Seu tempo, sua conversa e sua identidade são preservados.</p>
            </div>
            <div className="flex flex-row text-xl max-w-[704px] text-[16px] sm:text-[24px] font-inter gap-3 leading-[29px] items-start">
              &bull;
              <p>Você decide como se mostra. Nós cuidamos do ambiente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfidentialitySection;
