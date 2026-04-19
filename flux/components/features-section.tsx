"use client";
import { Github, TrendingUp, Zap } from "lucide-react";
import { motion } from "motion/react";

export const Features = () => {
  return (
    <section id="features" className=" w-full py-12  px-1 scroll-padding-top ">
      <div className="w-full  flex  flex-col  gap-0.5 justify-start">
        <h1 className="text-3xl lg:text-4xl font-sans font-extrabold text-start">
          Why Enops?
        </h1>
        <p className="text-sm text-foreground/80 text-start leading-normal font-medium">
          Build for modern development workflows
        </p>
      </div>
      <div className=" py-2  mt-4 gap-1  grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 w-full ">
        <motion.div
          whileHover="animate"
          initial="initial"
          className=" border group hover:bg-white duration-300 ease-in-out  transition-all border-neutral-300 border-dashed"
        >
          <div className="p-2">
            <span className="text-primary font-sans font-medium text-sm">
              /001/
            </span>
          </div>
          <div className="w-full flex p-0    justify-center ">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 198 178"
              width="200"
              height="162"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500  flex justify-center items-center"
            >
              {/* Edge connectors */}
              <line strokeWidth="1.2" x1="30" y1="72" x2="30" y2="120" />
              <line strokeWidth="1.2" x1="170" y1="72" x2="170" y2="120" />
              <line strokeWidth="1.2" x1="100" y1="100" x2="100" y2="148" />

              {/* BOTTOM layer */}
              <motion.path
                strokeWidth="1"
                d="M100 96 Q135 96 170 120 Q135 144 100 148 Q65 144 30 120 Q65 96 100 96 Z"
              />

              {/* TOP layer */}
              <motion.path
                variants={{
                  animate: {
                    translateY: -10,
                    fill: "var(--color-neutral-200)",
                  },
                  initial: {
                    translateY: 0,
                    fill: "var(--color-neutral-100)",
                  },
                }}
                transition={{
                  damping: 30,
                  type: "spring",
                  stiffness: 200,
                }}
                strokeWidth="1"
                d="M100 48 Q135 48 170 72 Q135 96 100 100 Q65 96 30 72 Q65 48 100 48 Z"
              />

              {/* INNER small diamond inside top layer */}
              <motion.path
                // animate="initial"
                variants={{
                  animate: {
                    translateY: -18,
                    fill: "var(--color-neutral-300)",
                  },
                  initial: {
                    translateY: 0,
                    fill: "white",
                  },
                }}
                transition={{
                  damping: 30,
                  type: "spring",
                  stiffness: 200,
                }}
                strokeWidth="1"
                d="M100 58 Q118 58 130 72 Q118 86 100 90 Q82 86 70 72 Q82 58 100 58 Z"
              />
            </motion.svg>
          </div>
          <div className="w-full border-t  px-1 border-neutral-300 border-dashed">
            <h2 className="text-[20px] md:text-[22px] font-semibold tracking-tighter">
              Ship Faster
            </h2>
            <p className="text-xs    w-full font-medium  font-sans text-foreground/80 leading-normal  text-start">
              Go from idea to production-ready schema in minutes, not days. AI
              handles the complexity.
            </p>
          </div>
        </motion.div>
        {/*Second */}
        <motion.div
          whileHover="animate"
          initial="initial"
          className=" border group hover:bg-white duration-300 ease-in-out  transition-all border-neutral-300 border-dashed"
        >
          <div className="p-2">
            <span className="text-primary font-sans font-medium text-sm">
              /002/
            </span>
          </div>

          <div className="w-full flex p-0    justify-center ">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 198 178"
              width="200"
              height="162"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500  flex justify-center items-center"
            >
              {/* Edge connectors */}
              <line strokeWidth="1.2" x1="30" y1="72" x2="30" y2="120" />
              <line strokeWidth="1.2" x1="170" y1="72" x2="170" y2="120" />
              <line strokeWidth="1.2" x1="100" y1="100" x2="100" y2="148" />

              {/* BOTTOM layer */}
              <motion.path
                strokeWidth="1"
                d="M100 96 Q135 96 170 120 Q135 144 100 148 Q65 144 30 120 Q65 96 100 96 Z"
              />

              {/* TOP layer */}
              <motion.path
                variants={{
                  animate: {
                    translateY: -10,
                    fill: "var(--color-neutral-200)",
                  },
                  initial: {
                    translateY: 0,
                    fill: "var(--color-neutral-100)",
                  },
                }}
                transition={{
                  damping: 30,
                  type: "spring",
                  stiffness: 200,
                }}
                strokeWidth="1"
                d="M100 48 Q135 48 170 72 Q135 96 100 100 Q65 96 30 72 Q65 48 100 48 Z"
              />

              {/* INNER small diamond inside top layer */}
              <motion.path
                // animate="initial"
                variants={{
                  animate: {
                    translateY: -18,
                    fill: "var(--color-neutral-300)",
                  },
                  initial: {
                    translateY: 0,
                    fill: "white",
                  },
                }}
                transition={{
                  damping: 30,
                  type: "spring",
                  stiffness: 200,
                }}
                strokeWidth="1"
                d="M100 58 Q118 58 130 72 Q118 86 100 90 Q82 86 70 72 Q82 58 100 58 Z"
              />
            </motion.svg>
          </div>
          <div className="w-full border-t  px-1 border-neutral-300 border-dashed">
            <h2 className=" text-[20px]  tracking-tighter md:text-[24px]  font-semibold">
              Scale easily
            </h2>
            <p className="text-xs   w-full font-sans text-foreground/80 leading-normal  text-start">
              Built-in optimization and best practices ensure your schema scales
              with your business.
            </p>
          </div>
        </motion.div>
        {/*Third */}
        <motion.div
          whileHover="animate"
          initial="initial"
          className=" border group hover:bg-white duration-300 ease-in-out  transition-all border-neutral-300 border-dashed"
        >
          <div className=" p-2 ">
            <span className="  mt-2 text-primary font-sans font-medium text-base">
              /003/
            </span>
          </div>
          <div className="w-full flex p-0    justify-center ">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 198 178"
              width="200"
              height="162"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500  flex justify-center items-center"
            >
              {/* Edge connectors */}
              <line strokeWidth="1.2" x1="30" y1="72" x2="30" y2="120" />
              <line strokeWidth="1.2" x1="170" y1="72" x2="170" y2="120" />
              <line strokeWidth="1.2" x1="100" y1="100" x2="100" y2="148" />

              {/* BOTTOM layer */}
              <motion.path
                strokeWidth="1"
                d="M100 96 Q135 96 170 120 Q135 144 100 148 Q65 144 30 120 Q65 96 100 96 Z"
              />

              {/* TOP layer */}
              <motion.path
                variants={{
                  animate: {
                    translateY: -10,
                    fill: "var(--color-neutral-200)",
                  },
                  initial: {
                    translateY: 0,
                    fill: "var(--color-neutral-100)",
                  },
                }}
                transition={{
                  damping: 30,
                  type: "spring",
                  stiffness: 200,
                }}
                strokeWidth="1"
                d="M100 48 Q135 48 170 72 Q135 96 100 100 Q65 96 30 72 Q65 48 100 48 Z"
              />

              {/* INNER small diamond inside top layer */}
              <motion.path
                // animate="initial"
                variants={{
                  animate: {
                    translateY: -18,
                    fill: "var(--color-neutral-300)",
                  },
                  initial: {
                    translateY: 0,
                    fill: "white",
                  },
                }}
                transition={{
                  damping: 30,
                  type: "spring",
                  stiffness: 200,
                }}
                strokeWidth="1"
                d="M100 58 Q118 58 130 72 Q118 86 100 90 Q82 86 70 72 Q82 58 100 58 Z"
              />
            </motion.svg>
          </div>
          <div className="w-full border-t  px-1 border-neutral-300 border-dashed">
            <h2 className=" text-[20px]  tracking-tighter md:text-[24px]  font-semibold">
              Own your stack{" "}
            </h2>
            <p className="text-xs       max-w-xs w-full  font-sans  font-medium text-foreground/70  leading-normal tracking-tight  text-start">
              Open-source core means no vendor lock-in. Self-host or go cloud,
              your choice.
            </p>
          </div>
        </motion.div>
        {/*Fourth */}
        <motion.div
          whileHover="animate"
          initial="initial"
          className=" border group hover:bg-white duration-300 ease-in-out  transition-all border-neutral-300 border-dashed"
        >
          <div className="p-2">
            <span className="text-primary font-sans font-medium text-sm">
              /004/
            </span>
          </div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 198 178"
            width="200"
            height="162"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-500  flex justify-center items-center"
          >
            {/* Edge connectors */}
            <line strokeWidth="1.2" x1="30" y1="72" x2="30" y2="120" />
            <line strokeWidth="1.2" x1="170" y1="72" x2="170" y2="120" />
            <line strokeWidth="1.2" x1="100" y1="100" x2="100" y2="148" />

            {/* BOTTOM layer */}
            <motion.path
              strokeWidth="1"
              d="M100 96 Q135 96 170 120 Q135 144 100 148 Q65 144 30 120 Q65 96 100 96 Z"
            />

            {/* TOP layer */}
            <motion.path
              variants={{
                animate: {
                  translateY: -10,
                  fill: "var(--color-neutral-200)",
                },
                initial: {
                  translateY: 0,
                  fill: "var(--color-neutral-100)",
                },
              }}
              transition={{
                damping: 30,
                type: "spring",
                stiffness: 200,
              }}
              strokeWidth="1"
              d="M100 48 Q135 48 170 72 Q135 96 100 100 Q65 96 30 72 Q65 48 100 48 Z"
            />

            {/* INNER small diamond inside top layer */}
            <motion.path
              // animate="initial"
              variants={{
                animate: {
                  translateY: -18,
                  fill: "var(--color-neutral-300)",
                },
                initial: {
                  translateY: 0,
                  fill: "white",
                },
              }}
              transition={{
                damping: 30,
                type: "spring",
                stiffness: 200,
              }}
              strokeWidth="1"
              d="M100 58 Q118 58 130 72 Q118 86 100 90 Q82 86 70 72 Q82 58 100 58 Z"
            />
          </motion.svg>
          <div className="w-full border-t  px-1 border-neutral-300 border-dashed">
            <h2 className="md:text-[22px] text-[20px] tracking-tight font-medium">
              Automate Everything
            </h2>
            <p className="text-xs    w-full font-sans text-foreground/80 leading-normal  text-start">
              Reduce manual work with smart automation that keeps your workflow
              fast and efficient.
            </p>
          </div>
        </motion.div>
      </div>

      {/*Works*/}
      <div className="py-16 mt-8">
        <div className="w-full  flex  flex-col  gap-0.5 justify-start">
          <h1 className="text-3xl lg:text-4xl font-sans font-extrabold text-start">
            How It Works?
          </h1>
          <p className="text-sm text-foreground/80 text-start leading-normal font-medium">
            From idea production in four simple steps
          </p>
        </div>
        <div className=" mt-4   grid grid-cols-1  sm:grid-cols-2  w-full">
          <div className="   p-1 ">
            <span className="text-primary font-sans font-medium text-sm">
              /001/
            </span>
            <h2 className="text-[20px] md:text-[22px] tracking-tight font-medium">
              Describe Your App
            </h2>
            <p className="text-[12px]  sm:text-[14px] w-full font-sans text-foreground/80 leading-normal  text-start">
              Tell you about you application needs in plain english
            </p>
          </div>
          <div className="    p-1">
            <span className="text-primary font-sans font-medium text-sm">
              /002/
            </span>
            <h2 className=" text-[20px] md:text-[22px] tracking-tight font-medium">
              Generate Schema
            </h2>
            <p className="md:text-text-[12px]  sm:text-[14px] w-fullfont-sans text-foreground/80 leading-normal  text-start">
              AI generates optimized database schema automatically
            </p>
          </div>
          <div className=" p-1">
            <span className="text-primary font-sans font-medium text-sm">
              /003/
            </span>
            <h2 className=" text-[20px] md:text-[22px]  tracking-tight font-medium">
              Optimize & Validate{" "}
            </h2>
            <p className="md:text-text-[12px]  sm:text-[14px] w-full  font-sans text-foreground/80  leading-normal  text-start">
              Review, refine, and validate with AI assistance
            </p>
          </div>
          <div className=" p-1">
            <span className="text-primary font-sans font-medium text-sm">
              /004/
            </span>
            <h2 className=" text-[20px] md:text-[22px] tracking-tight font-medium">
              Export{" "}
            </h2>
            <p className="md:text-text-[12px]  sm:text-[14px] w-full  font-sans text-foreground/80  leading-normal  text-start">
              Export to SQL, Prisma, TypeORM and other format.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-3.5 justify-center py-6">
        <div className=" max-w-xl ">
          <h2 className=" tracking-tight text-3xl  lg:text-4xl text-center font-bold font-sans leading-normal">
            Open Source & Community Drive
          </h2>
          <p className="text-center  text-foreground/70 font-sans   tracking-tight text-[14px] lg:text-base ">
            Built in the open, powered by the community. Join thousands of
            developers shaping the future of database schema design.
          </p>
        </div>
        <div className="flex  justify-center">
          <div className=" flex gap-1 items-center border  hover:bg-primary/10  hover:border-primary/10 duration-300 ease-in-out transition-all cursor-pointer rounded-md border-primary/30 px-3 py-1">
            <Github className=" text-primary fill-primary size-4.5" />{" "}
            <button className=" cursor-pointer text-[14px] font-sans font-medium  text-primary  ">
              Star On Github
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
