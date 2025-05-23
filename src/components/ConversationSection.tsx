import React from 'react';
import { motion } from 'framer-motion';

const ConversationSection: React.FC = () => {
  return (
    <section className="sm:py-[200px] py-20 bg-confidente-black">
      <div className="flex flex-col max-w-full text-center gap-5 sm:gap-10">
        <div className="flex flex-col gap-[10px] sm:gap-5">
          <motion.p
            className="font-serif text-xl text-[20px] sm:text-[40px] leading-[27px] sm:leading-[53px] bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Você conversa com homens que buscam ser ouvidos.
          </motion.p>

          <motion.p
            className="text-[#F5F0EB] text-[14px] sm:text-[20px] leading-[17px] sm:leading-[24px] font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sem nudez. Sem exposição. Sem espetáculo.
          </motion.p>
        </div>
        <div className="flex flex-col gap-[10px] sm:gap-5">
          <motion.p
            className="font-serif text-xl text-[20px] sm:text-[40px] leading-[27px] sm:leading-[53px] bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            TEXTO, ÁUDIO OU VÍDEO — VOCÊ ESCOLHE.
          </motion.p>

          <motion.p
            className="text-[#F5F0EB] text-[14px] sm:text-[20px] leading-[17px] sm:leading-[24px] font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            No seu tempo. Do seu jeito.
          </motion.p>
        </div>
        <div className="flex flex-col gap-[10px] sm:gap-5">
          <motion.p
            className="font-serif text-xl text-[20px] sm:text-[40px] leading-[27px] sm:leading-[53px] bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text text-transparent uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            E SIM, VOCÊ É PAGA POR ISSO.
          </motion.p>

          <motion.p
            className="text-[#F5F0EB] text-[14px] sm:text-[20px] leading-[17px] sm:leading-[24px] font-inter"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Com classe. Com respeito.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ConversationSection;
