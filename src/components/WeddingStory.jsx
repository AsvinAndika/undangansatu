import React from "react";

const steps = [
  { title: "Pertemuan", text: "Kami bertemu pertama kali di sebuah acara keluarga." },
  { title: "Pendekatan", text: "Mulai sering bertemu dan saling mengenal lebih dalam." },
  { title: "Lamaran", text: "Memohon restu keluarga dan melangsungkan lamaran." },
];

export default function WeddingStory() {
  return (
    <section className="py-8" data-aos="fade-up">
      <h3 className="text-center text-2xl sm:text-3xl font-serif mb-6">Our Story</h3>

      <div className="space-y-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg p-4 flex gap-4 items-start"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm">
              {i + 1}
            </div>
            <div>
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-sm text-gray-400 mt-1">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
