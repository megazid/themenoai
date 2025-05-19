import React from "react";

export function ScrollingLogo() {
  const logos: string[] = [
    "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/shopify.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/javascript.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/typescript.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tailwindcss.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/html5.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/css3.svg",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-6 group">
      <div className="animate-scroll flex gap-12 w-[200%]">
        {[...logos, ...logos].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index}`}
            className="h-12 w-auto shrink-0 invert brightness-0"
          />
        ))}
      </div>
    </div>
  );
}
