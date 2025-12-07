import React from 'react'
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <header
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('src/assets/images/6.jpg')" }} // ganti path sesuai
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className="relative z-10 text-center px-6"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <p className="text-sm text-gray-300 mb-2 animate-fadeInDown">Om Swastyastu</p>
        <h1 className="text-4xl sm:text-5xl font-serif tracking-wide mb-2 animate-fadeInUp">
          Nama Mempelai Pria & Nama Mempelai Wanita
        </h1>
        <p className="mt-3 text-lg text-gray-200 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
          12 Desember 2025 • Bali
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-300 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
        Gulir untuk melihat
      </div>
    </header>
  )
}

// Tambahkan di global CSS (misal: src/index.css atau App.css):
/*

*/
