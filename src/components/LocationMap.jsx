import React from "react";

export default function LocationMap() {
  return (
    <section id="location" className="py-8" data-aos="fade-up">
      <h4 className="text-center text-2xl sm:text-3xl font-serif mb-4">Lokasi Acara</h4>

      <div className="bg-gray-800 rounded-lg overflow-hidden shadow">
        <div className="aspect-video">
          {/* ganti src iframe atau image sesuai */}
          <iframe
            title="map"
            className="w-full h-full border-0"
            src="https://www.google.com/maps?q=Bali&output=embed"
            allowFullScreen
          />
        </div>

        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h5 className="font-semibold">Gedung / Tempat Pernikahan</h5>
            <p className="text-sm text-gray-400">Alamat lengkap, Kecamatan, Kota</p>
          </div>

          <div className="flex gap-2">
            <a
              href="https://www.google.com/maps?q=Bali"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white text-gray-900 rounded"
            >
              Buka di Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
