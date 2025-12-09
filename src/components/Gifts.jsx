import React, { useState } from "react";

export default function Gifts() {
  const [copied, setCopied] = useState(false);
  const account = {
    bank: "BCA",
    name: "Nama Pengantin",
    number: "1234 5678 9012",
  };

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section id="gifts" className="py-8 px-6" data-aos="fade-up">
      <h4 className="text-center text-2xl sm:text-3xl font-serif mb-4">Hadiah & Amplop</h4>

      <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-6 text-center">
        <p className="text-sm text-gray-400 mb-3">Apabila berkenan, bisa melalui rekening berikut:</p>

        <div className="bg-gray-900 p-4 rounded-md">
          <div className="font-medium">{account.bank}</div>
          <div className="text-sm text-gray-300">{account.name}</div>
          <div className="text-lg mt-2">{account.number}</div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => copy(account.number)}
            className="px-4 py-2 bg-white text-gray-900 rounded"
          >
            {copied ? "Disalin ✓" : "Salin Nomor"}
          </button>
        </div>

        <p className="text-xs text-gray-500 mt-3">Atau gunakan e-gift / link sesuai kesepakatan keluarga.</p>
      </div>
    </section>
  );
}
