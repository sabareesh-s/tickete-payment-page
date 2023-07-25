import React from "react";
import ChatIcon from "../icons/ChatIcon";

interface ChatWithUsProps {}

const ChatWithUs: React.FC<ChatWithUsProps> = ({}) => {
  return (
    <div className="bg-pumpkin1 w-[22.5rem] lg:w-[22.5rem] mt-16 rounded-xl h-fit flex justify-between px-6 py-8 text-pumpkin10">
      <div className="flex flex-col">
        <span className="text-lg font-semibold">Need help?</span>
        <span className="mt-1.5">We&apos;re here to help, 24/7</span>

        <button className="w-fit h-11 px-6 rounded-xl border border-pumpkin10 mt-6 font-semibold hover:bg-pumpkin10 hover:text-pumpkin1 transition-colors">
          Chat with us
        </button>
      </div>
      <ChatIcon />
    </div>
  );
};

export default ChatWithUs;
