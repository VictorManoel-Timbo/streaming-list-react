'use client'
import Image from "next/image";

export default function Card() {
  return (
    <main className="w-[304px] h-[456px] overflow-hidden shadow-lg border rounded-lg flex items-center justify-center ">
      <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12603293_b_v8_af.jpg" alt="" className="bg-cover h-full w-full" />
    </main>
  );
}