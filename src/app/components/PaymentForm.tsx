import React from "react";
import ShieldLogo from "../icons/ShieldLogo";

interface PaymentFormProps {}

const PaymentForm: React.FC<PaymentFormProps> = () => {
  return (
    <div className="w-[49.5rem] flex flex-col gap-4 mb-4">
      <h1 className="text-[48px] text-gray2 font-semibold">Confirm and Pay</h1>
      <div className="mt-6 space-y-8">
        <span className="space-y-1.5">
          <h2 className="text-2xl font-semibold text-gray2">
            Enter your details
          </h2>
          <p className="text-[15px] text-gray3">
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
        </span>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              id="default_outlined"
              className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="default_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="default_outlined"
              className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="default_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="default_outlined"
              className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="default_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="default_outlined"
              className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="default_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Full Name
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-8">
        <span className="space-y-1.5">
          <h2 className="text-2xl font-semibold text-gray2">
            Additional Information
          </h2>
          <p className="text-[15px] text-gray3">
            We need a few more details to complete your reservation.
          </p>
        </span>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              id="default_outlined"
              className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="default_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="default_outlined"
              className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="default_outlined"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Full Name
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-8">
        <span className="space-y-1.5">
          <h2 className="text-2xl font-semibold text-gray2">
            Select your mode of payment
          </h2>
          <p className="text-[15px] text-gray3">
            Payments with Tickete are secure and encrypted.
          </p>
        </span>
        {/* radio button here */}
        <div className="space-y-6">
          <div className="flex justify-between">
            <label
              htmlFor="hs-radio-group-1"
              className=" text-base font-semibold"
            >
              Credit & debit card
            </label>

            <input
              type="radio"
              name="hs-radio-group"
              className="mt-0.5 border-gray-200 rounded-full text-black-600 focus:ring-black-500"
              id="hs-radio-group-1"
              checked
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                id="default_outlined"
                className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="default_outlined"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="default_outlined"
                className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="default_outlined"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="default_outlined"
                className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="default_outlined"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="default_outlined"
                className="block px-2.5 border pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="default_outlined"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Full Name
              </label>
            </div>
          </div>
          {/* <hr className="h-px  bg-gray-200" /> */}
        </div>
        <div className="space-y-6">
          <div className="flex justify-between">
            <label
              htmlFor="hs-radio-group-2"
              className=" text-base font-semibold"
            >
              Klarna
            </label>

            <input
              type="radio"
              name="hs-radio-group"
              className="mt-0.5 border-gray-200 rounded-full text-black-600 focus:ring-black-500"
              id="hs-radio-group-2"
              checked
            />
          </div>
          {/* <hr className="h-px bg-gray-200" /> */}
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <input
          type="radio"
          name="hs-radio-group"
          className="mt-0.5 border-gray-200 rounded-full text-black-600 focus:ring-black-500"
          id="hs-radio-group-2"
          checked
        />
        <label htmlFor="hs-radio-group-2" className=" text-xs font-semibold">
          Klarna
        </label>
      </div>

      <div className="flex flex-col space-y-1.5">
        <span className=" text-[22px] font-semibold text-gray2">
          Total: 69.420$
        </span>
        <span className=" text-xs text-gray3">You will pay in USD($)</span>
      </div>
      <div className="space-y-3">
        <span className="text-xs text-gray3">
          With payment, you agree to the general{" "}
          <a href="#" className="text-blue-500">
            terms and conditions of Tickete & the activity provider.
          </a>
        </span>
        <button className="bg-buttonBlack flex items-center justify-center transition-colors hover:bg-gray-800 text-ghostWhite h-12 px-5 rounded-xl font-semibold text-base space-x-2">
          <span>Confirm and pay</span>
          <ShieldLogo />
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
