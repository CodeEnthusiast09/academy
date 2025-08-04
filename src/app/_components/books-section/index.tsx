"use client";

import BookCard from "@/components/books-cards";
import { Button } from "@/components/button";
import Image from "next/image";
import React, { useRef } from "react";

const BookSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const books = [
    {
      image: "/images/book.png",
      title: "O'tkan Kunlar",
      author: "Abdulla Qodiriy",
      readers: "302",
    },
    {
      image: "/images/book.png",
      title: "Mehrobdan Chayon",
      author: "Abdulla Qodiriy",
      readers: "256",
    },
    {
      image: "/images/book.png",
      title: "Sarob",
      author: "Abdurauf Fitrat",
      readers: "198",
    },
    {
      image: "/images/book.png",
      title: "Oq Kema",
      author: "Chingiz Aytmatov",
      readers: "445",
    },
    {
      image: "/images/book.png",
      title: "Shaytanat",
      author: "Tohir Malik",
      readers: "167",
    },
    {
      image: "/images/book.png",
      title: "Ikki Eshik Orasi",
      author: "Ulug'bek Hamdam",
      readers: "289",
    },
    {
      image: "/images/book.png",
      title: "O'tkan Kunlar",
      author: "Abdulla Qodiriy",
      readers: "302",
    },
    {
      image: "/images/book.png",
      title: "Mehrobdan Chayon",
      author: "Abdulla Qodiriy",
      readers: "256",
    },
    {
      image: "/images/book.png",
      title: "Sarob",
      author: "Abdurauf Fitrat",
      readers: "198",
    },
    {
      image: "/images/book.png",
      title: "Oq Kema",
      author: "Chingiz Aytmatov",
      readers: "445",
    },
    {
      image: "/images/book.png",
      title: "Shaytanat",
      author: "Tohir Malik",
      readers: "167",
    },
    {
      image: "/images/book.png",
      title: "Ikki Eshik Orasi",
      author: "Ulug'bek Hamdam",
      readers: "289",
    },
  ];

  return (
    <section id="kitoblar" className="mt-12 px-5 md:px-10 lg:px-20 relative">
      {/* Header Section */}
      <div className="relative pb-4 mb-10 lg:mb-10 border-b-2 border-primary200">
        <div className="flex items-center justify-between">
          <h2 className="text-primary100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Top 100 kitoblar
          </h2>

          {/* Mobile Navigation Buttons */}
          <div className="flex items-center gap-3 xl:hidden">
            <Button
              variant="neutral"
              onClick={scrollLeft}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm border border-primary200/20"
            >
              <Image
                alt="Previous books"
                src="/images/leftIcon.svg"
                width={20}
                height={20}
                priority
                className="opacity-70"
              />
            </Button>

            <Button
              variant="neutral"
              onClick={scrollRight}
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm border border-primary200/20"
            >
              <Image
                alt="Next books"
                src="/images/rightIcon.svg"
                width={20}
                height={20}
                priority
                className="opacity-70"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Books Container */}
      <div className="relative group">
        {/* Desktop Navigation Buttons */}
        <Button
          variant="neutral"
          onClick={scrollLeft}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-50 w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-white/95 backdrop-blur-md border border-primary200/30 hidden xl:flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-x-2"
        >
          <Image
            alt="Previous books"
            src="/images/leftIcon.svg"
            width={24}
            height={24}
            priority
            className="opacity-80"
          />
        </Button>

        {/* Scrollable Books Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex gap-6 pb-4 min-w-max">
            {books.map((book, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 sm:w-52 md:w-56 lg:w-60 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <BookCard
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  readers={book.readers}
                />
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="neutral"
          onClick={scrollRight}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-50 w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-white/95 backdrop-blur-md border border-primary200/30 hidden xl:flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2"
        >
          <Image
            alt="Next books"
            src="/images/rightIcon.svg"
            width={24}
            height={24}
            priority
            className="opacity-80"
          />
        </Button>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="absolute -left-20 md:left-0 -bottom-28">
        <Image
          alt="vector 2"
          src={"/images/orange2-design.svg"}
          width={180}
          height={73}
          priority
        />
      </div>

      <div className="absolute -right-20 md:right-0 -bottom-32">
        <Image
          alt="vector 2"
          src={"/images/design-purple-upside.png"}
          width={180}
          height={73}
          priority
        />
      </div>
    </section>
  );
};

export default BookSection;
