import { Button } from "@/components/button";
import Image from "next/image";
import React from "react";

const WhySection = () => {
  return (
    <section className="mt-30 mb-40 px-5 md:px-10 lg:px-20 relative">
      <h2 className="text-primary100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl pb-4 border-b-2 border-primary200">
        Nega aynan Ali Academy?
      </h2>

      <div className="relative">
        <p className="text-primary400 text-base sm:text-lg md:text-xl lg:text-3xl font-medium lg:font-light my-4 md:my-6 leading-7 text-justify md:text-left">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>

        <div className="absolute right-40 md:-right-30 xl:-right-14 top-16 xl:top-8">
          <Image
            alt="vector 2"
            src={"/images/orange-design.svg"}
            width={257}
            height={104}
            className="hidden md:block"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-24 mt-12 md:mt-24">
          <div className="relative w-[300px] md:w-[525px] h-[350px] rounded-2xl">
            <div className="absolute -left-5 sm:left-2 md:-left-7 lg:-left-5 -top-8 sm:top-4 md:-top-10 lg:-top-10 z-50">
              <Image
                alt="vector 3"
                src={"/images/purpleEllipseFull.svg"}
                width={60}
                height={60}
                priority
                className="md:w-16 md:h-16"
              />
            </div>

            <Image
              src="/images/phone-flower.png"
              fill
              priority
              alt="a phone, a pen, a notebook and a plant in a red background"
              className="w-full h-full object-cover rounded-lg"
            />

            <div className="absolute -top-5 xl:top-24 left-16 xl:left-5 z-50">
              <Image
                src="/images/grid.png"
                alt="grid rectangle"
                width={171.16}
                height={171.16}
                priority
                className="object-contain"
              />
            </div>

            <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10 md:gap-20">
              <p className="text-white text-3xl">Biznes Kurslar</p>

              <Button
                radius="rounded-full"
                size="md"
                variant="transparent"
                className="text-white text-[20px] w-44 h-12"
              >
                Batafsil
              </Button>
            </div>
          </div>

          <div className="relative w-[300px] md:w-[525px] h-[350px] rounded-2xl">
            <Image
              src="/images/person-sunset.png"
              fill
              priority
              alt="a person looking at the sunset"
              className="w-full h-full object-cover rounded-lg"
            />

            <div className="absolute inset-0 bg-black/30 z-10 rounded-lg"></div>

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-20">
              <div className="absolute top-28 right-0 z-50">
                <Image
                  src="/images/community.png"
                  alt="community"
                  width={171.16}
                  height={171.16}
                  priority
                  className="object-contain"
                />
              </div>

              <p className="text-white text-3xl max-w-[280px] text-center">
                Shaxsiy rivojlanish uchun kurslar
              </p>

              <Button
                radius="rounded-full"
                size="md"
                variant="primary"
                className="text-[20px] w-44 h-12"
              >
                Batafsil
              </Button>
            </div>

            <div className="absolute -right-5 sm:right-2 md:-right-7 lg:-right-5 -bottom-8 sm:bottom-4 md:-bottom-10 lg:-bottom-10 z-50">
              <Image
                alt="vector 3"
                src={"/images/orange2ellipe.svg"}
                width={60}
                height={60}
                priority
                className="md:w-16 md:h-16"
              />
            </div>
          </div>
        </div>

        <div className="absolute -left-20 md:-left-10 -bottom-40">
          <Image
            alt="vector 2"
            src={"/images/purple-design.svg"}
            width={257}
            height={104}
            priority
          />
        </div>

        <div className="absolute -right-20 md:-right-40 -bottom-80 md:-bottom-96 -z-1">
          <Image
            alt="vector 2"
            src={"/images/dots.png"}
            width={550}
            height={370}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
