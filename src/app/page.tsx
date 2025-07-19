import { Button } from "@/components/button";
import CategoryCard from "@/components/category-cards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
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
      <div className="w-full h-7 bg-primary100"></div>

      {/* Category Section */}
      <div className="mt-7 px-5 md:px-10 lg:px-20">
        <h2 className="text-primary100 font-bold text-4xl lg:text-6xl 2xl:text-7xl pb-4 mb-40 lg:mb-40 border-b-2 border-secondary400">
          Kategoriya
        </h2>
        <div className="relative">
          <div className="absolute -inset-y-40 sm:-inset-y-28 md:-inset-y-40 lg:-inset-y-40 -right-20 sm:-right-20 md:-right-7 lg:-right-20">
            <Image
              alt="vector 1"
              src={"/images/design-purple.png"}
              width={180}
              height={73}
              priority
            />
          </div>

          <div className="flex flex-col lg:flex-row px-2.5 gap-24 lg:gap-14 items-center justify-center mb-16 lg:mb-40">
            <CategoryCard
              image="/images/profile-picture.png"
              title="Muhammadali Eshonqulov darslari"
              users="2"
              time="Umumiy 108
          "
            />

            <CategoryCard
              image="/images/biznes.png"
              title="Biznes Kvadrat darslari"
              users="3"
              time="Umumiy 320 
          "
            />

            <CategoryCard
              image="/images/biznes2.png"
              title="Biznes Kvadrat ayollar"
              users="4"
              time="Umumiy 172
            "
            />
          </div>

          <div className="absolute -bottom-32 sm:bottom-28 md:-bottom-30 lg:-bottom-40 -left-20 sm:-left-20 md:-left-7 lg:-left-20">
            <Image
              alt="vector 2"
              src={"/images/design-orange.png"}
              width={180}
              height={73}
              priority
            />
          </div>
        </div>
      </div>

      {/* Top Courses Section*/}
      <div className="mt-30 px-5 md:px-10 lg:px-20">
        <div className="flex items-end justify-between relative">
          <div className="w-full flex flex-col">
            <h2 className="text-primary100 font-bold text-4xl lg:text-6xl 2xl:text-7xl pb-4 ">
              Top Kurslar
            </h2>

            <hr className="w-full h-[2px] bg-secondary400" />
          </div>

          <div className="absolute md:-right-20">
            <Image
              alt="vector 3"
              src={"/images/greenEllipse.svg"}
              width={70}
              height={70}
              priority
              className="hidden lg:block"
            />
          </div>

          <div className="absolute -right-5 md:-right-10">
            <Image
              alt="vector 3"
              src={"/images/greenEllipse.svg"}
              width={35}
              height={35}
              priority
              className="lg:hidden"
            />
          </div>
        </div>
      </div>

      {/* Top Books Section*/}
      <div className="mt-7 px-5 md:px-10 lg:px-20">
        <h2 className="text-primary100 font-bold text-4xl lg:text-6xl 2xl:text-7xl pb-4 mb-40 lg:mb-40 border-b-2 border-primary200">
          Top 100 kitoblar
        </h2>
      </div>
    </main>
  );
}
