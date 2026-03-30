import Image from "next/image";

export const LandingImage = () => {
  return (
    <div className="w-full py-6  ">
      <div className=" relative  overflow-hidden w-full aspect-video ">
        <Image
          src="/images/landing-image.png"
          alt="A Landing Image"
          fill
          sizes="100vw"
          className="object-contain w-full h-full -rotate-12 max-h-full max-w-full"
          priority
        />
      </div>
    </div>
  );
};
