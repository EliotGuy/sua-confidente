import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepsListProps {
  steps: Step[];
  title?: string;
  backgroundImage?: string;
}

const StepsList: React.FC<StepsListProps> = ({ steps }) => {
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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-16">
      <motion.img
        src="/assets/images/steplist.png"
        alt="Elegante mulher em vestido vermelho"
        className="w-full lg:max-w-[850px] max-h-[1080px]  rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="flex flex-col items-center px-[20px] sm:px-[20px] pt-[40px] 2xl:pt-[133px] pb-[80px] 2xl:pb-[134px] gap-5 sm:gap-10 flex-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step) => (
          <motion.div
            key={step.number}
            className="flex gap-5 sm:gap-[20px] max-w-[850px] w-full"
            variants={itemVariants}
          >
            <p className="text-[20px] xl:text-[30px] 2xl:text-[40px] text-[#F5F0EB] font-lora font-normal leading-none">
              {step.number}.
            </p>
            <div className="flex flex-col sm:gap-[10px] max-w-[780px]">
              <h3 className="text-xl xl:text-[30px] 2xl:text-[40px] text-[#F5F0EB] font-lora font-normal leading-none">
                {step.title}
              </h3>
              <p className="text-[14px] 2xl:text-[20px] font-inter bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StepsList;
