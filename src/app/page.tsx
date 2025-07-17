import { Button } from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      {/* Hero Section */}
      <div className="w-full px-2 py-3 sm:px-3 sm:py-4 md:p-4 flex flex-col md:flex-row items-center gap-5">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-7xl 2xl:text-8xl text-center italic text-primary300 2xl:pl-5">
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

        <div className="relative w-full h-[300px] lg:h-[450px] xl:h-[700px]">
          <Image
            src="/images/heroImage.png"
            alt="image of a person"
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full h-7 bg-primary100"></div>
    </main>
  );
}
