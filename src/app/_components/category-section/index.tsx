import CategoryCard from "@/components/category-cards";
import Image from "next/image";
import React from "react";

const CategorySection = () => {
  return (
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

        <div className="flex flex-col lg:flex-row px-2.5 gap-30 lg:gap-14 items-center justify-center mb-16 lg:mb-40">
          <CategoryCard
            image="/images/profile-picture.png"
            title="Muhammadali Eshonqulov darslari"
            users="2"
            time="Umumiy 108"
          />

          <CategoryCard
            image="/images/biznes.png"
            title="Biznes Kvadrat darslari"
            users="3"
            time="Umumiy 320"
          />

          <CategoryCard
            image="/images/biznes2.png"
            title="Biznes Kvadrat ayollar"
            users="4"
            time="Umumiy 172"
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
  );
};

export default CategorySection;
