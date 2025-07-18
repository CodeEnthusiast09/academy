import { Button } from "@/components/button";
import CategoryCard from "@/components/category-cards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-cente gap-5">
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
        <h2 className="text-primary100 font-bold text-4xl pb-4 mb-24 lg:mb-40 border-b-2 border-secondary400">
          Kategoriya
        </h2>

        <div className="flex flex-col lg:flex-row px-2.5 gap-24 items-center justify-center mb-16 lg:mb-40">
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
      </div>

      {/* Top Courses Section*/}
      <div className="mt-7 px-5 md:px-10 lg:px-20">
        <h2 className="text-primary100 font-bold text-4xl pb-4 mb-16 lg:mb-40 border-b-2 border-secondary400">
          Top Kurslar
        </h2>
      </div>
    </main>
  );
}
