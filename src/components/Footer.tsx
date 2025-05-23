import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] py-20">
      <div className="container px-5">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col gap-10 sm:gap-20 items-center w-full">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-20 sm:w-[120px] h-auto"
            />
            <button className="btn-primary md:self-auto w-full sm:w-[404px] h-[59px] text-center text-sm font-light font-inter bg-gradient-to-r from-[#747373] to-[#474646] bg-clip-text text-transparent border-2 border-solid border-[#747373] p-2 hover:bg-gradient-to-r hover:from-[#747373] hover:to-[#474646] hover:text-white hover:bg-clip-border">
              Acessar página da Confidente
            </button>
          </div>
          <p className="text-[12px] sm:text-[14px] leading-[15px] sm:leading-[17px] text-[#F5F0EB] font-inter text-center">
            ⓒ2028.Sua Confidente: Todos os drietos reservados.
          </p>
          <div className="flex flex-row gap-[10px] md:gap-8 text-center md:text-left mt-[-20px]">
            <Link
              to="#"
              className="text-[12px] sm:text-[14px] leading-[15px] sm:leading-[17px] text-[#F5F0EB] font-inter"
            >
              contato@suaconfidente.com.br
            </Link>
            <Link
              to="#"
              className="text-[12px] sm:text-[14px] leading-[15px] sm:leading-[17px] text-[#F5F0EB] font-inter"
            >
              Termos de Uso | Priviidacia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
