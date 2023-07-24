import TicketeLogo from "@/app/icons/TicketeLogo";
import HelpIcon from "@/app/icons/HelpIcon";
import React from "react";

interface HeaderProps {
  title: string;
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onClick }) => {
  return (
    <header className="w-full">
      <h1 className="h-[4.5rem] w-[80rem] flex justify-between px-10 items-center mx-auto">
        <a href='#' className="my-auto">
          <TicketeLogo/>
        </a>
        
        {onClick && <button className="text-gray2 w-[5.75rem] transition-colors h-11 flex items-center justify-center space-x-1 rounded-md hover:bg-slate-200" onClick={onClick}>
          <HelpIcon/>
          <span>Help</span>
          </button>}
      </h1>
    </header>
  );
};

export default Header;
