import React from 'react';
import { motion } from 'framer-motion';

interface CategoryProps {
  title: string;
  description: string;
  image?: string;
}

interface CategorySectionProps {
  categories: CategoryProps[];
  title?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
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
    <section className="relative flex flex-row justify-center py-20 px-4">
      <img
        src="/assets/images/category_bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 redscale"
        aria-hidden="true"
      />
      <motion.div
        className="grid md:grid-cols-3 max-w-[1400px] gap-5 xl:gap-[60px] justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.div key={index} className="group" variants={itemVariants}>
            <div
              style={{
                borderImage: 'linear-gradient(#E8D8B9, #BDA77A) 1',
                borderStyle: 'solid',
                borderWidth: '1px'
              }}
              className={`pt-5 pb-10 px-10 h-full flex flex-col items-center text-center gap-5 transition-all duration-300`}
            >
              <p className="text-center text-[20px] sm:text-[40px] leading-[26px] sm:leading-[51px] font-semibold font-serif bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent">
                {category.title}
              </p>
              <p className="text-[#F5F0EB] text-[14px] sm:text-[20px] leading-[17px] sm:leading-[24px] max-w-64">
                {category.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategorySection;
