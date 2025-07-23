import Image from "next/image";
import { CategoryCardProps } from "./types";

const CategoryCard = ({ image, title, users, time }: CategoryCardProps) => {
  return (
    <div className="relative w-full max-w-96 xl:max-w-[500px] 2xl:max-w-[650px] bg-white rounded-xl shadow-xl pt-12 flex flex-col items-center">
      {/* Circular Image - Overlapping Top */}
      <div className="absolute -top-18 md:-top-20 lg:-top-25">
        <div className="w-[125px] h-[125px] md:w-[150px] md:h-[150px] xl:w-[170px] xl:h-[170px] rounded-full overflow-hidden shadow-md">
          <Image
            src={image ?? "/images/default-image.png"}
            alt={title ?? "Category Image"}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 my-8 flex flex-col items-center">
        <p className="min-[320px]:text-[18px] min-[375px]:text-[18px] min-[380px]:text-[24px] max-[767px]:text-[24px]  md:text-2xl lg:text-[17px] xl:text-2xl 2xl:text-[40px] text-primary300 h-16 xl:h-20 2xl:h-28 text-center mb-3.5">
          {title}
        </p>
        <div className="flex flex-col items-start justify-between gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Image
              src="/images/user-reading.svg"
              alt="users"
              width={18.4}
              height={20}
              className="2xl:hidden"
            />
            <Image
              src="/images/user-reading.svg"
              alt="users"
              width={38.8}
              height={40}
              className="hidden 2xl:block"
            />
            <p className="text-[17px] 2xl:text-[34px] font-medium">
              {users} ta dars
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/images/clock.svg"
              alt="time"
              width={17}
              height={17}
              className="2xl:hidden"
            />
            <Image
              src="/images/clock.svg"
              alt="time"
              width={34}
              height={34}
              className="hidden 2xl:block"
            />
            <p className="text-[17px] 2xl:text-[34px] font-medium">
              {time} soat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
