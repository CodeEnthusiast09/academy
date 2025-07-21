import { Button } from "@/components/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-5">
      <div className="flex flex-col items-center gap-5">
        <h1 className="min-[320px]:text-[24px] sm:text-3xl min-[380px]:text-[36px] max-[767px]:text-[36px] md:text-4xl xl:text-7xl 2xl:text-8xl text-center italic text-primary300 pt-5 md:pt-0 2xl:pl-5">
          Foydali ilmga tikilgan sarmoya,
          <span className="text-primary200">
            ikki dunyoda ham foyda beradi!
          </span>
        </h1>
        <div className="hidden lg:flex xl:hidden items-center gap-5 px-4 py-3">
          <Button
            variant="primary"
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
      </div>

      <div className="relative w-full  h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
        <Image
          src="/images/heroImage.png"
          alt="image of a person"
          fill
          priority
          className="md:absolute object-contain object-bottom md:object-right-bottom"
        />
      </div>
    </div>
  );
};

export default HeroSection;
