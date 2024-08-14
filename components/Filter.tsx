"use client";

import { useState } from "react";

const links = ["All", "React JS", "Next Js", "Tailwind Css", "Node Js"];
const Filter = () => {
  const [active, setActive] = useState("");
  const handleActive = (link: string) => {
    setActive(link);
  };
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => {
            handleActive(link);
          }}
          className={`rounded-lg whitespace-nowrap capitalize px-8 py-2.5 ${active === link ? "gradient_blue-purple" : ""}`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filter;
