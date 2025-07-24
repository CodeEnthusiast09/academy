import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="my-30 px-5 md:px-10 lg:px-20 relative">
      <h2 className="text-primary100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl pb-4 border-b-2 border-primary200">
        Video&nbsp;
        <span className="text-">(platforma haqida)</span>
      </h2>

      <div className="flex flex-col xl:flex-row items-center justify-between gap-5 mt-14">
        <div className="max-w-[700px] 2xl:max-w-[1500px] relative">
          <div className="absolute -left-[4%] md:-left-3 xl:-left-[3%] 2xl:-left-5 -top-[2.5%] md:-top-[3%] xl:-top-[7%] w-[42px] h-[42px] md:w-[49px] md:h-[49px] lg:w-[56px] lg:h-[56px] xl:w-[66px] xl:h-[66px] 2xl:w-[75px] 2xl:h-[75px] bg-secondary600 rounded-full -z-1"></div>

          <p className="text-primary300 text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-justify md:text-left font-semibold 2xl:font-medium 2xl:leading-12">
            Everything you can do in a physical classroom,
            <span className="text-primary200"> you can do with Skilline</span>
          </p>

          <p className="text-primary400 text-base sm:text-lg md:text-xl lg:text-3xl font-medium lg:font-light my-4 md:my-6 leading-7 text-justify md:text-left">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary100 underline font-medium text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Learn more
          </a>
        </div>

        <div className="absolute right-[15%] md:right-10 xl:right-[45%] top-[44%] md:top-[35%] xl:top-[70%] w-16 h-16 md:w-28 md:h-28 xl:w-8 xl:h-8 bg-secondary600 rounded-full"></div>

        <div className="mt-10 md:mt-7 max-w-[300px] md:max-w-[555px] max-h-[380px] relative bg-ambr-500">
          <div className="absolute -top-3 -left-3 z-0">
            <Image
              src="/images/blueRectangle.svg"
              alt="blue rectangle"
              width={102.25}
              height={102.25}
              priority
              className="object-contain object-center"
            />
          </div>

          <div className="absolute -bottom-3 -right-3 z-0">
            <Image
              src="/images/goldRectangle.svg"
              alt="gold rectangle"
              width={171.16}
              height={171.16}
              priority
              className="object-contain"
            />
          </div>

          <div className="absolute -top-28 -right-16 z-50">
            <Image
              src="/images/community.png"
              alt="community"
              width={171.16}
              height={171.16}
              priority
              className="object-contain"
            />
          </div>

          <div className="absolute -bottom-28 -left-16 z-50">
            <Image
              src="/images/grid.png"
              alt="grid rectangle"
              width={171.16}
              height={171.16}
              priority
              className="object-contain"
            />
          </div>

          {/* Main content area */}
          <div className="relative z-1 p-12 w-[300px] md:w-[525px] h-[350px] rounded-2xl">
            <Image
              src="/images/classroom.png"
              fill
              priority
              alt="Meeting room with people and laptops"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="absolute top-28 left-20 md:left-44 z-50">
            <Image
              src="/images/play-button.svg"
              alt="play button"
              width={171.16}
              height={171.16}
              priority
              className="object-contain"
            />
          </div>
        </div>
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

      <div className="absolute -left-5 sm:left-2 md:-left-7 lg:-left-5 -bottom-28 sm:bottom-4 md:-bottom-24 lg:-bottom-30">
        <Image
          alt="vector 3"
          src={"/images/orange2ellipe.svg"}
          width={60}
          height={60}
          priority
          className="md:w-20 md:h-24"
        />
      </div>
    </section>
  );
};

export default AboutSection;
