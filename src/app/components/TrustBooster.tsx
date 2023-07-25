import React from "react";
import ChatIcon from "../icons/ChatIcon";
import VerifiedIcon from "../icons/VerifiedIcon";
import CalendarIcon2 from "../icons/CalendarIcon2";
import ShieldLogo2 from "../icons/ShieldIcon";

interface TrustBoosterProps {}

const TrustBooster: React.FC<TrustBoosterProps> = () => {
  return (
    <div className="mt-16 space-y-8">
      <span className="text-gray2 font-semibold text-2xl lg:p-0 px-3">
        The Tickete promise
      </span>

      <div className="grid lg:grid-cols-4 lg:p-0 px-3 grid-cols-1 gap-6">
        <div className="px-5 py-4 flex lg:flex-col flex-row rounded-xl lg:border lg:border-gray6">
          <VerifiedIcon />
          <div className="inline-flex flex-col mt-[2.87rem] space-y-1.5">
            <span className="font-semibold">Official tickets</span>
            <span>Authorised reseller to top attraction</span>
          </div>
        </div>
        <div className="px-5 py-4 flex lg:flex-col flex-row rounded-xl lg:border lg:border-gray6">
          <ChatIcon />
          <div className="inline-flex flex-col mt-[2.87rem] space-y-1.5">
            <span className="font-semibold">24/7 dedicated support</span>
            <span>We&apos;re here to help, talk to an expert</span>
          </div>
        </div>
        <div className="px-5 py-4 flex lg:flex-col flex-row rounded-xl lg:border lg:border-gray6">
          <CalendarIcon2 />
          <div className="inline-flex flex-col mt-[2.87rem] space-y-1.5">
            <span className="font-semibold">24/7 dedicated support</span>
            <span>We&apos;re here to help, talk to an expert</span>
          </div>
        </div>
        <div className="px-5 py-4 flex lg:flex-col flex-row rounded-xl lg:border lg:border-gray6">
          <ShieldLogo2 />
          <div className="inline-flex flex-col mt-[2.87rem] space-y-1.5">
            <span className="font-semibold">24/7 dedicated support</span>
            <span>We&apos;re here to help, talk to an expert</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBooster;
