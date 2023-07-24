'use client';
import Image from 'next/image'
import Header from './components/Header'
import PaymentForm from './components/PaymentForm';

export default function Home() {
  return (
    <main className="">
      <Header title="tickete"  onClick={() => console.log("Help button clicked")} />
      <section className='w-[75rem] mx-auto pt-[6.25rem]'>
        <PaymentForm/>
      </section>
    </main>
  )
}
