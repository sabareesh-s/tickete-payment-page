"use client";
import Image from "next/image";
import Header from "./components/Header";
import PaymentForm from "./components/PaymentForm";
import ProductDetails from "./components/ProductDetails";
import FAQDisclosure from "./components/FAQDisclosure";
import ChatWithUs from "./components/ChatWithUs";

export default function Home() {
  return (
    <main className="">
      <Header
        title="tickete"
        onClick={() => console.log("Help button clicked")}
      />
      <section className="w-[75rem] mx-auto pt-[6.25rem] flex flex-1 space-x-6">
        <PaymentForm />
        <span className="inline-block min-h-[1em] w-[1px] self-stretch bg-gray6 opacity-100" />
        <ProductDetails />
      </section>
      <section className="w-[75rem] mx-auto ">
        <hr className="h-px mt-6 bg-gray6 border-0" />
        <div className="flex flex-1 justify-between">
          <FAQDisclosure/>
          <ChatWithUs/>
        </div>
      </section>
    </main>
  );
}
