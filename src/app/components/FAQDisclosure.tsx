import { Disclosure } from "@headlessui/react";
import React from "react";
import ClockIcon from "../icons/ClockIcon";
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

interface FAQDisclosureProps {}

const FAQDisclosure: React.FC<FAQDisclosureProps> = () => {
  return (
    <div className="mt-16 space-y-8 w-[714px]">
      <span className="text-gray2 font-semibold text-2xl ">Frequently asked questions</span>
      <Disclosure as="div" className="flex flex-col space-y-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="text-lg font-semibold text-gray2">Are my tickets transferable?</span>
              {open ? <MinusIcon /> : <PlusIcon />}
            </Disclosure.Button>
            <Disclosure.Panel className="">
              No. The tickets can only be used by the person(s) whose details are indicated on the voucher.
              If you’re booking for friends and family, make sure to key in their details.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="flex flex-col space-y-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="text-lg font-semibold text-gray2">How long will it take to receive my ticket?</span>
              {open ? <MinusIcon /> : <PlusIcon />}
            </Disclosure.Button>
            <Disclosure.Panel className="">
              The tickets will hit your inbox as soon as you complete making the payment.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="flex flex-col space-y-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="text-lg font-semibold text-gray2">Is my payment secure?</span>
              {open ? <MinusIcon /> : <PlusIcon />}
            </Disclosure.Button>
            <Disclosure.Panel className="">
              We use a PCI compliant payment gateway that is internationally recognized and protects against
              fraud and unauthorized transactions. In short, your payment is 100% secure and you have nothing to worry!
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="flex flex-col space-y-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="text-lg font-semibold text-gray2">What type of payment options do you offer?</span>
              {open ? <MinusIcon /> : <PlusIcon />}
            </Disclosure.Button>
            <Disclosure.Panel className="">
              We accept payments via all major international debit cards, credit cards, Google Pay, and Apple Pay.
              Please note that Tickete, being an online marketplace, does not accept cash payments.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="flex flex-col space-y-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="text-lg font-semibold text-gray2">When will I be charged for my booking?</span>
              {open ? <MinusIcon /> : <PlusIcon />}
            </Disclosure.Button>
            <Disclosure.Panel className="">
              Your account will be charged immediately upon booking. If the booking is canceled from your end or
              by our local tour operator, we will refund the entire amount to your account at no extra cost.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="flex flex-col space-y-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="text-lg font-semibold text-gray2">Why am I being charged in USD?</span>
              {open ? <MinusIcon /> : <PlusIcon />}
            </Disclosure.Button>
            <Disclosure.Panel className="">
              All payments on Tickete are charged in USD. Your account will be debited with the spot rate for the
              conversion rate from your local currency to USD. We understand this is less than ideal but, we’re working
              on accepting payments in currencies across the world.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="flex flex-col space-y-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="text-lg font-semibold text-gray2">Will I get a complete refund if I cancel this ticket?</span>
              {open ? <MinusIcon /> : <PlusIcon />}
            </Disclosure.Button>
            <Disclosure.Panel className="">
              The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours
              before they start, several others can’t be canceled once the reservation has been confirmed. For the ones
              that can be canceled within the permissible cancellation period, you will receive a full refund.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="flex flex-col space-y-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="text-lg font-semibold text-gray2">How long does it take for a refund to reflect in my account?</span>
              {open ? <MinusIcon /> : <PlusIcon />}
            </Disclosure.Button>
            <Disclosure.Panel className="">
              Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to
              reflect in your account.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <hr className="h-px my-3 bg-gray6 border-0" />
    </div>
  );
};

export default FAQDisclosure;