import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 py-8 items-center border-b-2 border-black-200 text-white">
      <div className="w-full mx-auto flex justify-between px-6 max-w-screen-2xl xs:px-8 sm:px-16">
        <Link href="/">
          {/* <h1 className="text-3xl text-white font-bold">Paaje</h1> */}
          <Image src="/jsm-logo.svg" alt="logo" width={55} height={40} />
        </Link>
        <Image
          src="/hamburger-menu.svg"
          alt="logo"
          width={30}
          height={30}
          className="block md:hidden"
        />
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_purple-blue font-bold">
            <Link target="_blank" href="https://jsmastery.pro/next13">
              Next.js 13.4 courses
            </Link>
          </li>
          <li className="body-text font-normal">
            <Link target="_blank" href="https://jsmastery.pro/next13">
             Master Course
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
