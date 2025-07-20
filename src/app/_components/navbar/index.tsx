"use client";

import { Button } from "@/components/button";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { navItems } from "./navbar.data";
import { NavItem } from "@/interface/global";
import { NavBarItem } from "./navbar-item";
import Image from "next/image";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev: boolean) => !prev);
  };

  return (
    <header className="bg-primary100 w-full flex items-center justify-between">
      <div className="flex items-center gap-2 px-4 py-3">
        <Image
          alt="logo"
          src="/images/logo.png"
          width={145}
          height={82}
          className="w-auto h-12 sm:h-16 md:h-20"
        />
      </div>
      {/* Mobile devices */}
      <div className="flex items-center gap-4 lg:hidden">
        <Button variant="transparent" onClick={toggleNav}>
          <RiMenu4Line className="text-3xl text-background" />
        </Button>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex items-center justify-between">
        <ul className="flex items-center gap-8">
          {navItems.map((item: NavItem, index: number) => (
            <NavBarItem key={index} item={item} onClick={() => toggleNav()} />
          ))}

          <div className="hidden xl:flex items-center gap-5 px-4 py-3">
            <Button
              variant="neutral"
              className="hidden w-28 text-[17px] md:block cursor-pointer"
            >
              Kirish
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="hidden text-[17px] md:block cursor-pointer whitespace-nowrap"
            >
              Ro&apos;yxatdan o&apos;tish
            </Button>
          </div>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`px-5 xl:px-6 py-6 h-screen overflow-auto w-1/2 md:w-[40vw] lg:w-[25vw] 2xl:w-[18vw] bg-primary100 border-l border-l-primary200 z-20 fixed lg:right-0 transition-all duration-500 top-0 ${
          showNav ? "right-0" : " -right-[150vw]"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between pb-6">
          <Button
            onClick={toggleNav}
            variant="transparent"
            className="bg-transparent hover:bg-transparent"
          >
            <FaTimes className="text-background text-2xl absolute right-4" />
          </Button>
        </div>
        <nav className="block z-50">
          <ul className="flex flex-col gap-8">
            {navItems.map((item: NavItem, index: number) => (
              <NavBarItem key={index} item={item} onClick={() => toggleNav()} />
            ))}

            <hr className="h-[1px] bg-primary200" />
            <div className="flex flex-col items-start gap-5">
              <Button
                variant="neutral"
                className="w-full text-[16px] rounded-2xl block md:block"
              >
                Kirish
              </Button>

              <Button
                variant="secondary"
                className="w-full text-[14px] rounded-2xl block md:block"
              >
                Ro&apos;yxatdan o&apos;tish
              </Button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
