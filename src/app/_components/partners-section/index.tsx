"use client";

import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    { src: "/images/onedrive.svg", alt: "OneDrive" },
    { src: "/images/dropbox.svg", alt: "Dropbox" },
    { src: "/images/msteams.svg", alt: "Microsoft Teams" },
    { src: "/images/google-drive.svg", alt: "Google Drive" },
  ];

  return (
    <div className="my-30 px-5 md:px-10 lg:px-20 relative">
      <div className="absolute sm:left-2 md:left-7 lg:left-5 -top-40 -z-5">
        <Image
          alt="vector 3"
          src={"/images/goldEllipse.svg"}
          width={60}
          height={60}
          priority
          className="md:w-16 md:h-16"
        />
      </div>

      <div className="absolute -right-30 sm:right-2 md:-right-7 lg:-right-5 -top-28 sm:top-4 md:-top-24 lg:-top-28 z-50">
        <Image
          alt="vector 3"
          src={"/images/gold-design.png"}
          width={257}
          height={104}
          priority
        />
      </div>

      <h2 className="text-primary100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl pb-4 border-b-2 border-primary200">
        Hamkorlarimiz
        <div className="absolute -left-10 lg:-left-10 top-2 lg:top-8 z-50">
          <Image
            alt="vector 3"
            src={"/images/orange2ellipe.svg"}
            width={60}
            height={60}
            priority
            className="md:w-16 md:h-16"
          />
        </div>
      </h2>

      {/* Marquee Container */}
      <div className="mt-20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16"
            >
              <Image
                alt={partner.alt}
                src={partner.src}
                width={228}
                height={195}
                priority
                className="h-14 md:h-48 w-auto object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16"
            >
              <Image
                alt={partner.alt}
                src={partner.src}
                width={228}
                height={195}
                priority
                className="h-14 md:h-48 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -left-36 sm:left-2 md:-left-7 lg:-left-5 -bottom-36 z-50">
        <Image
          alt="vector 3"
          src={"/images/orange-design-big.png"}
          width={257}
          height={104}
          priority
        />
      </div>

      <div className="absolute -right-5 sm:right-2 md:-right-7 lg:-right-5 -bottom-28 sm:bottom-4 md:-bottom-24 lg:-bottom-30">
        <Image
          alt="vector 3"
          src={"/images/purpleEllipseFull.svg"}
          width={60}
          height={60}
          priority
          className="md:w-20 md:h-24"
        />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 12s linear infinite;
        }

        /* Tablet speed */
        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }

        /* Desktop speed */
        @media (min-width: 1024px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnersSection;
