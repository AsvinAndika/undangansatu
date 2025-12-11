import React from "react";

export default function Footer({
  image = "src/assets/images/hero.jpg",
  logo = "src/assets/images/logoundangan.jpg",
  couple = "Toing & Nia",
  creditTitle = "Visual",
  creditName = "BomboraStudio",
}) {
  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-md mx-auto">
          <div
            className="relative w-full bg-center bg-cover h-[60vh] sm:h-[70vh] flex items-end"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full text-center pb-8 px-4">
              <div className="text-white">
                <div className="text-5xl sm:text-6xl font-abuget leading-tight mb-2">{couple.replace("&", " & ")}</div>
              </div>
            </div>
          </div>

          {/* White block below with logo and credits */}
        <div className="bg-white border-t border-gray-200 -mt-2 pt-6 pb-8 px-6 text-center">
          <div className="mx-auto w-42 h-42 bg-white flex items-center justify-center mb-4 ">
            <img src={logo} alt="Logo" className="w-64 h-auto" />
          </div>

          <div className="text-xs text-gray-600">{creditTitle}</div>
          <div className="font-medium text-sm mt-1">{creditName}</div>

          <div className="mt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} {couple.replace("&", " & ")}. Semua hak cipta.
          </div>
        </div>
      </div>
    </footer>
  );
}
