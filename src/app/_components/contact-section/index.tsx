import Image from "next/image";
import React from "react";
import Form from "./form";

const ContactSection = () => {
  return (
    <div className="relative w-full h-[950px] md:h-[700px] overflow-hidden">
      <Image
        src="/images/form-background.png"
        fill
        priority
        alt="a phone, a pen, a notebook and a plant in a red background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="absolute inset-0 z-20 py-8 px-5 lg:p-10 xl:p-24 lg:flex items-center xl:gap-10 2xl:justify-center 2xl:gap-40">
        <div className="lg:mr-5">
          <p className="text-white text-3xl md:text-5xl text-center lg:text-left">
            Murojaat uchun
          </p>
          <p className="text-white text-xl md:text-2xl text-center lg:text-left mt-2.5">
            Taklif va mulohazalaringiz bo&apos;lsa shu yerga qoldiring.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:max-w-[630px]">
          <Form />
        </div>
      </div>

      <div className="absolute right-5 sm:right-2 md:right-7 lg:right-5 -bottom-16 sm:bottom-4 md:-bottom-16 lg:-bottom-16 z-50">
        <Image
          alt="vector 3"
          src={"/images/redE.svg"}
          width={91}
          height={91}
          priority
          className="md:w-24 md:h-w-24"
        />
      </div>
    </div>
  );
};

export default ContactSection;
