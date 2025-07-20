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
    <div className="bg-secondary500/20 rounded-2xl shadow-md pt-20 md:pt-36 px-3 md:px-6 pb-2 relative w-full max-w-96 xl:max-w-[500px] 2xl:max-w-[650px]">
      <div className="w-full absolute -top-18 -left-2 md:-top-28 lg:-top-30">
        <div className="relative w-full h-[150px] md:h-[250px] rounded-2xl overflow-hidden">
          <Image
            src={image ?? "/images/default-image.png"}
            alt={title ?? "Category Image"}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <p className="text-secondary200 font-light text-sm md:text-lg">{title}</p>
      <p className="text-secondary200 font-semibold text-sm md:text-lg">
        {tutor}
      </p>

      <div className="flex items-center gap-3 my-2  border-b-1 border-primary100 pb-2">
        <div className="flex items-center gap-2">
          <Image
            src="/images/graduates.svg"
            alt="graduates"
            width={10}
            height={13}
            className="w-2.5 h-3 md:w-5 md:h-6 lg:w-6 lg:h-7"
          />
          <p className="text-secondary300 text-[10px] md:text-[16px]">
            {graduates}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/user-reading.svg"
            alt="students"
            width={14}
            height={15.22}
            className="w-3.5 h-4 md:w-6 md:h-7 lg:w-7 lg:h-8"
          />
          <p className="text-secondary300 text-[10px] md:text-[16px]">
            {students} ta darslar
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5">
        <p className="text-[14px] md:text-[20px] font-semibold text-primary100">
          {price} UZS
        </p>
        <Button
          variant="primary"
          radius="rounded-md"
          className="text-xs md:text-lg"
        >
          Xarid qilish
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
