"use client";
import Image from "next/image";
import Header from "./components/Header";
import PaymentForm from "./components/PaymentForm";
import ProductDetails from "./components/ProductDetails";
import FAQDisclosure from "./components/FAQDisclosure";
import ChatWithUs from "./components/ChatWithUs";
import TrustBooster from "./components/TrustBooster";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header
        title="tickete"
        onClick={() => console.log("Help button clicked")}
      />
      <section className="md:px-5 lg:px-0 lg:max-w-[75rem] flex-col-reverse mx-auto pt-[6.25rem] flex lg:flex-row lg:flex-1 space-x-6">
        <PaymentForm />
        <span className=" inline-block min-h-[1em] lg:w-[1px] w-[0px] self-stretch bg-gray6 opacity-100 " />
        <ProductDetails />
      </section>
      <section className="md:max-w-[45rem] lg:max-w-[75rem] mx-auto ">
        <hr className="h-px mt-6 bg-gray6 border-0" />
        <div className="flex p-3 flex-col lg:flex-row lg:flex-1 lg:justify-between">
          <FAQDisclosure/>
          <ChatWithUs/>
        </div>
        <hr className="h-px bg-gray6 border-0" />
        <TrustBooster/>
      </section>
      <Footer/>
    </main>
  );
}
