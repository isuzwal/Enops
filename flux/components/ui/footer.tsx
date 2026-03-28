import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" py-8 px-2 w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="">
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
              className="text-[24px]   tracking-tight text-primary font-bold  font-sans"
            >
              enops.dev
            </Link>
          </div>
          <p className=" max-w-xs    text-left text-foreground/80 font-sans text-[14px]">
            An AI-powered platform to design, visualize, optimize, and export
            database schemas
          </p>
        </div>
        <div className=" flex flex-col items-center gap-0.5">
          <h1 className="text-primary font-sans text-[14px] ">/NAVIGATION/</h1>
          <div className="  flex  flex-col  justify-start w-full  border gap-3">
            <Link
              href="#"
              className=" text-sm font-sans text-foreground leading-none"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className=" text-sm font-sans text-foreground leading-0"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="border flex flex-col gap-2">
          <h1 className="text-primary font-sans text-[14px] ">/RESOURCES/</h1>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className=" text-sm font-sans text-foreground leading-none"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className=" text-sm font-sans text-foreground leading-0"
            >
              404 Page
            </Link>
          </div>
        </div>
        <div className="border">
          <h1 className="text-primary font-sans text-[16px] font-medium">
            /SOCIAL/
          </h1>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className=" text-sm font-sans text-foreground leading-0"
            >
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
