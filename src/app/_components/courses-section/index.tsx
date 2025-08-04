import CourseCard from "@/components/courses-cards";
import Image from "next/image";

const CourseSection = () => {
  return (
    <section id="kurslar" className="mt-28 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative">
      <div className="flex items-end justify-between relative">
        <div className="w-full flex flex-col">
          <h2 className="text-primary100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-2 sm:pb-3 md:pb-4">
            Top Kurslar
          </h2>

          <hr className="w-full h-[2px] bg-secondary400" />
        </div>

        {/* Decorative ellipses */}
        <div className="absolute -right-4 sm:-right-6 md:-right-8 lg:-right-16 xl:-right-20 2xl:-right-24">
          <Image
            alt="vector 3"
            src={"/images/greenEllipse.svg"}
            width={70}
            height={70}
            priority
            className="hidden lg:block w-12 h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
          />
        </div>

        <div className="absolute -right-6 sm:-right-3 md:-right-14 lg:hidden">
          <Image
            alt="vector 3"
            src={"/images/greenEllipse.svg"}
            width={35}
            height={35}
            priority
            className="w-9 h-9 sm:w-8 sm:h-8 md:w-20 md:h-20"
          />
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 xl:mt-48 2xl:mt-52">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32 justify-items-center mb-12 sm:mb-16 md:mb-20 lg:mb-32 xl:mb-40">
          <CourseCard
            image="/images/online-course12.png"
            title="HTMLda Dasturlash"
            tutor="Bakhtiyorov Doniyor"
            graduates="302"
            students="28"
            price="450 000"
          />

          <CourseCard
            image="/images/online-course12.png"
            title="HTMLda Dasturlash"
            tutor="Bakhtiyorov Doniyor"
            graduates="302"
            students="28"
            price="450 000"
          />

          <CourseCard
            image="/images/online-course12.png"
            title="HTMLda Dasturlash"
            tutor="Bakhtiyorov Doniyor"
            graduates="302"
            students="28"
            price="450 000"
          />

          <CourseCard
            image="/images/online-course12.png"
            title="HTMLda Dasturlash"
            tutor="Bakhtiyorov Doniyor"
            graduates="302"
            students="28"
            price="450 000"
          />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -left-2 sm:-left-3 md:-left-10 lg:-left-6 top-1/2 transform -translate-y-1/2">
        <Image
          alt="vector 3"
          src={"/images/redEllipse.svg"}
          width={70}
          height={70}
          priority
          className="hidden md:block md:w-20 md:h-24"
        />
      </div>

      <div className="absolute right-0 sm:right-2 md:-right-7 lg:-right-2 bottom-0 sm:bottom-4 md:-bottom-24 lg:-bottom-30">
        <Image
          alt="vector 3"
          src={"/images/purpleEllipse.svg"}
          width={45}
          height={45}
          priority
          className="hidden sm:block w-8 h-8 sm:w-10 sm:h-10 md:w-20 md:h-24"
        />
      </div>
    </section>
  );
};

export default CourseSection;
