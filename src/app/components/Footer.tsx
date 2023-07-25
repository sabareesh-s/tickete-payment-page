import React from "react";
import TicketeLogo from "../icons/TicketeLogo";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full bg-black mt-16">
      <div className="w-[75rem] mx-auto pt-16">
        <a href="#" className="my-auto">
          <TicketeLogo height="40" width="126" fill="#ffff" />
        </a>
        <hr className="h-px bg-gray5 mt-20 border-0" />
        <div className="flex justify-between">
          <div className=" pb-10 inline-flex gap-3 mt-8">
            <a href="#" className=" text-ghostWhite underline">
              © Tickete Inc
            </a>
            <span className="text-white">•</span>

            <a href="#" className="text-ghostWhite underline">
              Privacy
            </a>
            <span className="text-white">•</span>

            <a href="#" className="text-ghostWhite underline">
              Terms
            </a>
            <span className="text-white">•</span>

            <a href="#" className="text-ghostWhite underline">
              Cancellation policy
            </a>
          </div>

          <div className=" pb-10 inline-flex gap-3 mt-8">
            <button>
              <InstagramIcon />
            </button>

            <button>
              <FacebookIcon />
            </button>
            <button>
              <TwitterIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
