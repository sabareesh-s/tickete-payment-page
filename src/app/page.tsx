'use client';
import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="">
      <Header title="tickete"  onClick={() => console.log("Help button clicked")} />
    </main>
  )
}
