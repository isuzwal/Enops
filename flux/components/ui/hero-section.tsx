import { ArrowRight, CreditCard } from "lucide-react";
export const HeroSection = () => {
  return (
    <div className=" py-20 px-0 ">
      <div className=" max-w-3xl  flex flex-col gap-1 ">
        <span className="px-1  border  max-w-64  border-dashed border-secondary-foreground/60 flex items-center font-medium   font-mono tracking-tight  text-secondary-foreground/70">
          AI powerd DB Schema Mangement
        </span>
        <h1 className="text-3xl   sm:text-6xl tracking-tight  font-bold">
          Design Better Database Schemas with{" "}
          <span className="text-primary">AI</span>
        </h1>
      </div>
      <p className=" text-[14px] sm:text-[17px] lg:text-[20px] mt-2.5  py-1 max-w-2xl   text-secondary-foreground/80 leading-none  text-start">
        AI-powered platform to design, visualize, optimize and export production
        ready database schemas in minutes.
      </p>
      <div className="py-2  flex flex-col  justify-start">
        <button className="  max-w-46 font-semibold  font-mono text-[16px]  justify-center  flex gap-1.5 items-center bg-primary text-white px-2 py-1  text-center">
          Try Pro Version <ArrowRight className="size-5" />
        </button>
        <span className="flex px-0.5 gap-1 items-center tracking-tight text-[14px] text-secondary-foreground/70 font-medium">
          <CreditCard className="size-4.5" /> No Card Required
        </span>
      </div>
    </div>
  );
};
