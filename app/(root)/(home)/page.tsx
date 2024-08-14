import Filter from "@/components/Filter";
import Search from "@/components/Search";
import React from "react";

const Page = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[276px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="text-white text-center mb-6 sm:heading1 heading2">
            Paaje Resources
          </h1>
        </div>
        <Search />
      </section>
      <Filter/>
    </main>
  );
};

export default Page;
