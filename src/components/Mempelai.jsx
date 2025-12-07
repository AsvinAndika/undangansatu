import React from "react";
import imgPria from "../assets/images/4.jpg";
import imgWanita from "../assets/images/5.jpg";

export default function Mempelai() {
  return (
    <section className="py-12">
      <div className="text-left mb-8" data-aos="fade-down">
        <p className="text-xs tracking-widest text-gray-400 mb-2">PAWIWAHAN</p>
        <h2 className="text-3xl font-serif font-semibold text-white mb-2">Wedding Of</h2>
        <div className="w-16 h-1 bg-amber-400 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mempelai Pria */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img
              src={imgPria}
              alt="Mempelai Pria"
              className="object-cover w-full h-[420px] md:h-[500px] brightness-95 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-all duration-500 group-hover:bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 via-black/30 to-transparent px-7 py-6">
              <p className="text-xs text-gray-200 mb-1 tracking-wide">MEMPELAI PRIA</p>
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">I Made Aris</h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-300 px-1 md:px-0">
            Putra kedua dari pasangan Bapak Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Mempelai Wanita */}
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img
              src={imgWanita}
              alt="Mempelai Wanita"
              className="object-cover w-full h-[420px] md:h-[500px] brightness-95 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 transition-all duration-500 group-hover:bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 via-black/30 to-transparent px-7 py-6">
              <p className="text-xs text-gray-200 mb-1 tracking-wide">MEMPELAI WANITA</p>
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">Ni Rai Saras</h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-300 px-1 md:px-0">
            Putri kedua dari pasangan Bapak Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
