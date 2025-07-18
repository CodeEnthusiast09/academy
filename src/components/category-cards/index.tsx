// import Image from "next/image";
// import { CategoryCardProps } from "./types";

// const CategoryCard = ({ image, title, users, time }: CategoryCardProps) => {
//   return (
//     <div className="relative w-full max-w-96 rounded-xl shadow-md overflow-hidden bg-white border-t-2">
//       {/* Content */}
//       <div className="p-4 flex flex-col items-center">
//         <p className="text-primary300 text-2xl text-center mb-3.5">{title}</p>
//         <div className="flex flex-col items-start justify-between gap-2 text-sm text-gray-600">
//           <div className="flex items-center gap-1">
//             <Image
//               src="/images/user-reading.svg"
//               alt="users"
//               width={18.4}
//               height={20}
//             />
//             <p className="text-[17px] font-medium">{users} ta dars</p>
//           </div>
//           <div className="flex items-center gap-1">
//             <Image src="/images/clock.svg" alt="time" width={17} height={17} />
//             <p className="text-[17px] font-medium">{time} soat</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;

import Image from "next/image";
import { CategoryCardProps } from "./types";

const CategoryCard = ({ image, title, users, time }: CategoryCardProps) => {
  return (
    <div className="relative w-full max-w-96 bg-white rounded-xl shadow-xl pt-12 flex flex-col items-center border-t-2">
      {/* Circular Image - Overlapping Top */}
      <div className="absolute -top-28">
        <div className="rounded-full overflow-hidden shadow-md">
          <Image
            src={image ?? "/images/default-image.png"}
            alt={title ?? "Category Image"}
            width={250}
            height={250}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 my-8 flex flex-col items-center">
        <p className="text-primary300 h-16 text-2xl text-center mb-3.5">
          {title}
        </p>
        <div className="flex flex-col items-start justify-between gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Image
              src="/images/user-reading.svg"
              alt="users"
              width={18.4}
              height={20}
            />
            <p className="text-[17px] font-medium">{users} ta dars</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/images/clock.svg" alt="time" width={17} height={17} />
            <p className="text-[17px] font-medium">{time} soat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
