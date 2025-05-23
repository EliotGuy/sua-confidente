import React from 'react';

interface ReasonsListProps {
  reasons: string[];
}

const ReasonsList: React.FC<ReasonsListProps> = ({ reasons }) => {
  const backgroundImage = '/assets/images/reason-background.jpg';

  return (
    <section className="relative pt-[60px] sm:pt-20 pb-[72px] sm:pb-[73px]">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 redscale"
        aria-hidden="true"
      />

      <div className="container relative w-full px-5">
        <ul className="flex flex-col gap-[20px] sm:gap-[33px] leading-none max-w-[1440px] mx-auto sm:ml-[360px] sm:mr-[310px]">
          {reasons.map((reason, index) => (
            <li
              key={index}
              style={{
                background: 'linear-gradient(90deg, #E8D8B9, #BDA77A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              className="flex flex-row font-semibold font-mukta text-[16px] sm:text-[36px] leading-[27px] sm:leading-[60px] md:text-[40px] uppercase gap-2"
            >
              &bull;
              <p>{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReasonsList;
