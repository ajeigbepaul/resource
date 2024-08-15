"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { formUrlQuery } from "@/sanity/utils";
const links = ["All", "ReactJs", "NextJs", "TailwindCss", "NodeJs"];
const Filter = () => {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter()
  const handleActive = (link: string) => {
    let newUrl = "";
    if (active === link) {
      setActive("");
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setActive(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, {scroll:false})
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
