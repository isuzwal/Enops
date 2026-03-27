import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-2 py-1 ">
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
          className="text-[24px]   tracking-tight text-primary font-extrabold font-mono"
        >
          enops.dev
        </Link>
      </div>
      <div className="  hidden sm:flex  gap-8  px-4 justify-between   items-center">
        <Link
          href={"#"}
          className="text-[16px] tracking-tighter text-foreground font-normal font-mono "
        >
          Features
        </Link>
        <Link
          href={"#"}
          className="text-[16px]  tracking-tighter text-foreground font-normal font-mono "
        >
          Pricing
        </Link>
        <Link
          href={"#"}
          className="text-[16px] tracking-tighter text-foreground  font-normal font-mono "
        >
          Roadmap
        </Link>
        <Link
          href={"#"}
          className="text-[16px] tracking-tighter text-foreground  font-normal font-mono "
        >
          FAQ
        </Link>
      </div>

      <div>
        <button className="text-sm font-semibold items-center   bg-primary  font-mono px-2 py-1 text-white border border-primary">
          Try Pro
        </button>
      </div>
    </nav>
  );
};
