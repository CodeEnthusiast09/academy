import Image from "next/image";
import { CourseCardProps } from "./types";
import { Button } from "../button";

const CourseCard = ({
  image,
  title,
  tutor,
  graduates,
  students,
  price,
}: CourseCardProps) => {
  return (
    <div className="bg-secondary500/20 rounded-2xl shadow-md pt-20 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-36 px-3 sm:px-4 md:px-6 pb-3 md:pb-4 relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] mx-auto">
      <div className="w-full absolute -top-12 sm:-top-14 md:-top-16 lg:-top-18 xl:-top-20 left-1/2 transform -translate-x-1/2">
        <div className="relative w-[90%] mx-auto h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] rounded-2xl overflow-hidden">
          <Image
            src={image ?? "/images/default-image.png"}
            alt={title ?? "Course Image"}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="space-y-1 md:space-y-2">
        <p className="text-secondary200 font-light text-sm sm:text-base md:text-lg line-clamp-2">
          {title}
        </p>
        <p className="text-secondary200 font-semibold text-sm sm:text-base md:text-lg line-clamp-1">
          {tutor}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 my-3 md:my-4 border-b border-primary100 pb-2 md:pb-3">
        <div className="flex items-center gap-1 sm:gap-2">
          <Image
            src="/images/graduates.svg"
            alt="graduates"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
          />
          <p className="text-secondary300 text-[10px] sm:text-xs md:text-sm lg:text-base">
            {graduates}
          </p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Image
            src="/images/user-reading.svg"
            alt="students"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
          />
          <p className="text-secondary300 text-[10px] sm:text-xs md:text-sm lg:text-base">
            {students} ta darslar
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 md:gap-5">
        <p className="text-sm sm:text-base md:text-base lg:text-xl font-semibold text-primary100">
          {price} UZS
        </p>
        <Button
          variant="primary"
          radius="rounded-md"
          className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 whitespace-nowrap"
        >
          Xarid qilish
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
