import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  icon: string;
  description: string;
}

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 sm:py-[200px] bg-confidente-black text-center">
      <div className="container flex flex-col gap-[40px] sm:gap-[100px] px-5">
        <p className="font-lora section-title max-w-[1154px] mx-auto text-[32px] sm:text-[48px] md:text-[64px] leading-[41px] sm:leading-[61px] md:leading-[82px] bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent">
          SIMPLES, DIRETO, FEITO PARA HOMENS OCUPADOS COMO VOCÊ
        </p>
        <div className="container px-0 ">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-y-10 sm:gap-y-20 max-w-[1360px] mx-auto justify-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item gap-[10px] sm:gap-5 px-0 sm:px-10 py-5 sm:py-10 max-w-[235px] sm:max-w-[377px]"
                variants={itemVariants}
              >
                <img
                  src={feature.icon}
                  className="w-auto h-[51px] sm:h-[76px]"
                />
                <p className="text-sm sm:text-xl leading-[21px] tracking-[-0.7px] sm:leading-[23px] text-[#F5F0EB] font-semibold font-serif sm:font-raleway">
                  {feature.title}
                </p>
                <p className="text-[#F5F0EB] font-inter leading-[17px] sm:leading-[19px] text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
