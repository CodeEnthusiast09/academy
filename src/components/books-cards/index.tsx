import Image from "next/image";
import { BookCardProps } from "./types";
import { Button } from "../button";

const BookCard = ({ image, title, author, readers }: BookCardProps) => {
  return (
    <div className="bg-black rounded-xl shadow-md overflow-hidden w-full max-w-[240px] relative">
      <div className="relative w-full h-96">
        {/* Image */}
        <Image
          src={image ?? "/images/default-image.png"}
          alt={title ?? "Course Image"}
          fill
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute inset-0 px-4 pb-2 flex flex-col justify-end">
          <h3 className="font-semibold text-lg text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{author}</p>

          <div className="flex justify-between items-end mt-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/eyes.svg"
                alt="students"
                width={14.77}
                height={9.16}
              />
              <p className="text-white text-[10px]">{readers}</p>
            </div>
            <Button
              radius="rounded-md"
              size="sm"
              className="text-[16px] font-semibold w-[98px]"
            >
              Batafsil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
