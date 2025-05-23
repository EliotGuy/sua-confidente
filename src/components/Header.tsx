import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  page: string;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="flex justify-center lg:justify-between items-center py-[64px] px-[100px]">
        <Link to="/" className="z-10">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-[80px] h-[56px] sm:w-[120px] sm:h-[85px]"
          />
        </Link>
        <button
          className="btn-primary hidden lg:inline-flex w-[373px] h-[59px] 
             lg:w-[373px] lg:h-[59px] font-inter tracking-[0] leading-[100%]
             text-base font-normal
             bg-gradient-to-r from-[#E8D8B9] to-[#BDA77A] bg-clip-text 
             text-transparent border-2 border-solid border-[#E8D8B9] 
             p-2 hover:bg-gradient-to-r hover:from-[#E8D8B9] 
             hover:to-[#BDA77A] hover:text-white hover:bg-clip-border 
             items-center justify-center"
        >
          {page === 'home'
            ? 'Faça parte da lista privada do Beta'
            : 'Quero ser uma Confidente'}
        </button>
      </div>
    </header>
  );
};

export default Header;
