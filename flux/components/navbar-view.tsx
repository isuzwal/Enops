"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const NavBar = () => {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   const scrollToSection = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };
  return (
    <nav
      className={`flex sticky top-0 z-40 w-full justify-between items-center px-2 py-1 transition-colors duration-300  ${
        showShadow ? "  bg-neutral-50" : " "
      }`}
    >
      <div className="flex items-center gap-1">
        <div className=" relative overflow-hidden h-6 w-6">
          <Image
            src="/images/logo.png"
            alt="logo"
            loading="lazy"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <Link
          href="/"
          scroll={true}
          className="text-[24px]   tracking-tight text-primary font-bold  font-sans"
        >
          enops.dev
        </Link>
      </div>
      <div className="  hidden sm:flex  gap-10  px-4 justify-between   items-center">
        <Link
          scroll={true}
          href={"#features"}
          className="text-[14px] hover:text-foreground/50 duration-300 ease-in-out transition-all tracking-tighte text-foreground/90  font-sans font-medium "
        >
          Features
        </Link>
        <Link
          href={"#pricing"}
          scroll={true}
          className="text-[14px] hover:text-foreground/50 duration-300 ease-in-out transition-all tracking-tighte text-foreground/90  font-sans font-medium"
        >
          Pricing
        </Link>
        <Link
          href={"#roadmap"}
          scroll={true}
          className="text-[14px]  hover:text-foreground/50 duration-300 ease-in-out transition-all tracking-tighte text-foreground/90  font-sans font-medium"
        >
          Roadmap
        </Link>
        <Link
          href={"#faq"}
          scroll={true}
          className="text-[14px] hover:text-foreground/50 duration-300 ease-in-out transition-all tracking-tighte text-foreground/90  font-sans font-medium "
        >
          FAQ
        </Link>
      </div>

      <button className="  cursor-pointer text-[13px] hover:bg-primary/80 duration-300  ease-in-out    transition-all  font-medium  items-center rounded-md shadow-xs   bg-primary/90   font-sans  px-3 py-0.5 text-white border-2 border-primary/90 ">
        Try Pro
      </button>
    </nav>
  );
};
