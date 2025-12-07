import React from "react";

export default function EventDetails() {
  return (
    <section className="py-12" data-aos="fade-up">
      <div className="flex flex-col items-center">
        <div className="w-px h-12 bg-white mb-6"></div>
        <h4 className="text-3xl font-serif font-semibold text-center mb-8">
          Our Wedding Event
        </h4>

        <div className="px-8 py-10 max-w-xl w-full text-center mt-1">
          <div className="mb-2 text-lg font-semibold tracking-wide text-white">
            Resepsi
          </div>
          <div className="text-sm text-gray-300 mb-1">
            Jumat, 12 Desember 2025
          </div>
          <div className="font-bold text-lg mb-4">
            Pukul 18.00 WITA – Selesai
          </div>
          <p className="text-gray-300 mb-6">
            Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk
            hadir dalam acara resepsi pernikahan kami. Semoga kehadiran dan doa
            restu Anda menjadi berkah bagi kami.
          </p>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan&dates=20251212T090000Z/20251212T120000Z&details=Resepsi+Pernikahan&location=Lokasi+Acara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-2 border-b-2 border-white text-xs tracking-widest text-gray-200 hover:text-gray-400 transition"
          >
            SIMPAN TANGGAL <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
