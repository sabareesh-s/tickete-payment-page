import React from "react";
import TicketIcon from "../icons/TicketIcon";
import CalendarIcon from "../icons/CalendarIcon";
import ClockIcon from "../icons/ClockIcon";
import TagIcon from "../icons/TagIcon";

interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  return (
    <div className="w-[22.5rem]">
      <div>
        <div className="flex flex-col gap-3">
          <img
            className="rounded-lg"
            src="https://images.pexels.com/photos/1089645/pexels-photo-1089645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product image"
          />
          <span className="text-gray2 font-semibold ">
            Amsterdam open boat canal cruise - Live Guide - from Anne Frank
            House
          </span>
        </div>
        <div className="space-y-3 font-semibold text-base text-gray2 mt-6">
          <div className="flex gap-4">
            <TicketIcon />
            <span>Amsterdam Open Boat</span>
          </div>
          <div className="flex gap-4">
            <CalendarIcon />
            <span>7th August, 2023</span>
          </div>
          <div className="flex gap-4">
            <ClockIcon />
            <span>7:00 AM</span>
          </div>
        </div>
      </div>
      <hr className="h-px my-6 bg-gray6 border-0" />
      <div className="space-y-8">
        <span className="text-gray2 font-semibold">Tickets overview</span>

        <div className="space-y-4 text-base text-gray2">
          <div className="flex gap-4 justify-between">
            <span>Adult</span>
            <span>$300</span>
          </div>
          <div className="flex gap-4 justify-between">
            <span>Tax</span>
            <span>$20</span>
          </div>
          <div className="flex gap-4 text-green9 justify-between">
            <span>Discount applied</span>
            <span>-$69</span>
          </div>
          <hr className="h-px my-6 bg-gray6 border-0" />
          <div className="flex gap-4 font-semibold text-green9 justify-between">
            <div className="flex space-x-3 items-center">
              <TagIcon />
              <span className="underline">'TICKETE10' applied</span>
            </div>
            <button className="text-gray2">Remove</button>
          </div>
          <hr className="h-px my-6 bg-gray6 border-0" />
        </div>
        <div>
          <div className="flex gap-4 justify-between font-semibold">
            <span>Total</span>
            <span>$420</span>
          </div>

          <span className="text-sm">You will pay in USD($)</span>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-gray8 px-5 py-4">
          <span className="font-semibold">
            Free Cancellation
          </span>
          <span>
            Cancel before 30 days to get a full refund
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
