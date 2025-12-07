import React, { useState, useEffect } from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/7.jpg";

const IMAGES = [img1, img2, img3, img4];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  const selectImage = (i) => {
    setFade(false);
    setTimeout(() => {
      setActive(i);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % IMAGES.length);
        setFade(true);
      }, 200);
    }, 20000); // 20 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8" data-aos="fade-up">
      <h4 className="text-center text-2xl font-serif mb-3">Our Gallery</h4>
      <div className="text-center mb-6">
        <div className="tracking-widest text-xs text-white mb-3">
          PAWIWAHAN
        </div>
        <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
          di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-
          pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa
          tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        {/* Main Image */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex items-center justify-center aspect-4/3 mb-4">
          <img
            src={IMAGES[active]}
            alt={`gallery-${active + 1}`}
            className={`object-cover w-full h-full transition-all duration-700 ease-in-out ${
              fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        </div>
        {/* Thumbnails Grid */}
        <div className="grid grid-cols-4 gap-3 bg-gray-900 p-3 rounded-lg">
          {IMAGES.map((src, i) => (
            <button
              key={i}
              onClick={() => selectImage(i)}
              className={`overflow-hidden rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                i === active
                  ? "border-gray-400 scale-105 shadow-lg"
                  : "border-transparent opacity-80 hover:opacity-100"
              }`}
              aria-label={`Pilih foto ${i + 1}`}
            >
              <img
                src={src}
                alt={`thumb-${i + 1}`}
                className={`object-cover w-full h-full aspect-4/3 transition-transform duration-500 ${
                  i === active ? "scale-105" : "scale-100"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
